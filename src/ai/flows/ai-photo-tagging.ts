'use server';

/**
 * @fileOverview This file contains the AI photo tagging flow.
 *
 * - aiPhotoTagging - A function that takes a photo and generates descriptive tags.
 * - AIPhotoTaggingInput - The input type for the aiPhotoTagging function.
 * - AIPhotoTaggingOutput - The return type for the aiPhotoTagging function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIPhotoTaggingInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type AIPhotoTaggingInput = z.infer<typeof AIPhotoTaggingInputSchema>;

const AIPhotoTaggingOutputSchema = z.object({
  tags: z.array(z.string()).describe('An array of descriptive tags for the photo.'),
});
export type AIPhotoTaggingOutput = z.infer<typeof AIPhotoTaggingOutputSchema>;

export async function aiPhotoTagging(input: AIPhotoTaggingInput): Promise<AIPhotoTaggingOutput> {
  return aiPhotoTaggingFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiPhotoTaggingPrompt',
  input: {schema: AIPhotoTaggingInputSchema},
  output: {schema: AIPhotoTaggingOutputSchema},
  prompt: `You are an expert AI that specializes in generating descriptive tags for photos.

  Based on the photo, generate an array of descriptive tags that can be used to easily find the photo through search.

  Here is the photo: {{media url=photoDataUri}}
  `,
});

const aiPhotoTaggingFlow = ai.defineFlow(
  {
    name: 'aiPhotoTaggingFlow',
    inputSchema: AIPhotoTaggingInputSchema,
    outputSchema: AIPhotoTaggingOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
