export type Photo = {
  id: number;
  width: number;
  height: number;
  photographer: string;
  src: string;
  alt: string;
  tags: string[];
  dataAiHint: string;
};

const newImageUrls = [
    "https://drive.google.com/uc?export=download&id=1-v9itrqPb_9Dm89_goOx4xxHng59lxwR",
    "https://drive.google.com/uc?export=download&id=100sPCjY8zcUTF7f0TXPBPds2j6vERemM",
    "https://drive.google.com/uc?export=download&id=10OZfpheXSKF7xQfA7NAqxwIiYhDwMNzk",
    "https://drive.google.com/uc?export=download&id=112IvLk4zO6qGG3yuL0c48n5KJ1aR9TCQ",
    "https://drive.google.com/uc?export=download&id=11Qsu2CznI3A7DylS4bhSqBsL1qo8RNIh",
    "https://drive.google.com/uc?export=download&id=11RetNB6MHh7aUlpCb66_3j5C4AqDp103",
    "https://drive.google.com/uc?export=download&id=12O5j9cNvXf8x0LFFMRkibBlTKAcmQ4It",
    "https://drive.google.com/uc?export=download&id=12ZeOyNq08V2ELSVYofNnfrGiBJARLKOg",
    "https://drive.google.com/uc?export=download&id=12a4yqaLrG0zmY3ebrBxIU-VXahly0rwF",
    "https://drive.google.com/uc?export=download&id=13k-fmN_GNQTRqN_7EdyyCIicaKPYlfuP",
    "https://drive.google.com/uc?export=download&id=13qoiOE6S0v1naGaJjHOF8_I0Y1AZo-9e",
    "https://drive.google.com/uc?export=download&id=14MgsVgg_-eBzSJZhpAaBbJ3m7sWaQ4rb",
    "https://drive.google.com/uc?export=download&id=14miFWfOxCw6mcb_H5RkbE7RFzZWakORO",
    "https://drive.google.com/uc?export=download&id=154eiLC58YJ1vgTBS7li9uc8ZSWe-bLRW",
    "https://drive.google.com/uc?export=download&id=16EoPFwbimwYHmIwDD8UJpSYrRX0BjLJ8",
    "https://drive.google.com/uc?export=download&id=17_sfQIo5rbtVMTf7MfCIXKMMeKEwziE-",
    "https://drive.google.com/uc?export=download&id=18sb8YukPEAC09aHQk34lUPtwuE64EWHy",
    "https://drive.google.com/uc?export=download&id=19hZ8E1q0MHq3qyDw0U7FmoHUDGp5K1Qd",
    "https://drive.google.com/uc?export=download&id=1BP6XLiDyMnLHbqy4bteRJux9ErHG6TYt",
    "https://drive.google.com/uc?export=download&id=1Bkhk_90kWL4iQDaH1ut63roPD2QxBA7q",
    "https://drive.google.com/uc?export=download&id=1CE9zDCT8q0wP6QMyJOT77fDIt_6f_2Oj",
    "https://drive.google.com/uc?export=download&id=1D9CtASiQgUAmzsueAwNlTicE2K_hNwaz",
    "https://drive.google.com/uc?export=download&id=1DFphL8vg-6hjBiYG5lzABW9Dg6yCIGxS",
    "https://drive.google.com/uc?export=download&id=1E5uHtxrNCtrF7hSzY1MR8kslrBUTWoQh",
    "https://drive.google.com/uc?export=download&id=1EDVbCbFulatRzMklqwqibPXUQTh81i_5",
    "https://drive.google.com/uc?export=download&id=1EisTb3ilvkJq2hET1VWkgFN0z9JWzPzn",
    "https://drive.google.com/uc?export=download&id=1F7wOPoozENJiaRS7IRo3lQwXoU55yoXz",
    "https://drive.google.com/uc?export=download&id=1FZApjwOgHrDjz2WKjN6_MvIIlXWXzoyG",
    "https://drive.google.com/uc?export=download&id=1G_6z2w5oMuEf_Dp1h1dqKaOlvVuZ7Wxa",
    "https://drive.google.com/uc?export=download&id=1HcftCjlUqIxk_hv5N2qsMizmrX_9YBer",
    "https://drive.google.com/uc?export=download&id=1IEazFaP32u83FVTkBqSoX4EXE0EchCfN",
    "https://drive.google.com/uc?export=download&id=1Ian07l-_tBX8tCaJZub4wWbDEwxTv-WU",
    "https://drive.google.com/uc?export=download&id=1IgDfu6_NWQPNi_-trPSGRYTQ2I3jax9Q",
    "https://drive.google.com/uc?export=download&id=1JKX3-t55QMg0UP0yBpJiXWw5QLR9AUeV",
    "https://drive.google.com/uc?export=download&id=1JmkNeD6RsvhyFr76MqeGnvYy8J4727Nn",
    "https://drive.google.com/uc?export=download&id=1KCmMT8AsZnXpJgRj3o-zRTiUtDkAUv8U",
    "https://drive.google.com/uc?export=download&id=1KK8d4ggC7Iiz-WsQIXvEYBt6EgtmVrMO",
    "https://drive.google.com/uc?export=download&id=1KNfPifM3aNZEmB46AzP9hsDgbzE00ryx",
    "https://drive.google.com/uc?export=download&id=1MHX3c3QfAWKmzsBVkU9IwVNMhXCC_f8u",
    "https://drive.google.com/uc?export=download&id=1MOjY_3erFHhI1ltlqQqJj7DbU__A4CIb",
    "https://drive.google.com/uc?export=download&id=1Nzoid7issWUz3qdZ8EMs_Kjt04SHnGLu",
    "https://drive.google.com/uc?export=download&id=1O-WLXXWFMZR8czHj7SR79wYqQYUxuMYG",
    "https://drive.google.com/uc?export=download&id=1O7bb1jb1-ICifxAmq0N_DEudilXUdf6q",
    "https://drive.google.com/uc?export=download&id=1OhBOZC5JOZWjomOuoiK6qaeQwFGVuQTM",
    "https://drive.google.com/uc?export=download&id=1P8DsKW8Js-d509_Kij3ahLOYHAAepaUW",
    "https://drive.google.com/uc?export=download&id=1QZbTxyGKwt23tUY9_avHPG_YfFv6lKZD",
    "https://drive.google.com/uc?export=download&id=1RMs0DsTWr-hJx4lLYC8lcpSiIcF7Wtnu",
    "https://drive.google.com/uc?export=download&id=1SsOCqn4xbRVmTcGRsrFRx-jMofiW3jaC",
    "https://drive.google.com/uc?export=download&id=1WxU7SwNYRUZ5fL0hwH0CN51SnjZtvNPD",
    "https://drive.google.com/uc?export=download&id=1XC40RhDjTMc1MeRtHil1bZL6203E9NPo",
    "https://drive.google.com/uc?export=download&id=1XHoHdMs_f4O-EIa79W4Ffp6vMWEzl4v_",
    "https://drive.google.com/uc?export=download&id=1XTUTOqzv36hONdV9flx0ya-wlX8_x3GC",
    "https://drive.google.com/uc?export=download&id=1Y2jdEV1BY-rLySXNijxo0Gk_4SJfbbjL",
    "https://drive.google.com/uc?export=download&id=1YEzz2eMKMWHWg4N3ztfJMDqgbnfC6RMf",
    "https://drive.google.com/uc?export=download&id=1Z0tpoiIMnr4GJZXIofvr_zciUiRPTkBV",
    "https://drive.google.com/uc?export=download&id=1ZE80NWy0_uS3y4OWK2DcdO3Tt9AR1NTZ",
    "https://drive.google.com/uc?export=download&id=1aeA7sk6n6W2Ir_MOdZJUJWfX1soSbjDk",
    "https://drive.google.com/uc?export=download&id=1b5U84BbG6d7fh-mO4BA9JxvLlNvAXj0j",
    "https://drive.google.com/uc?export=download&id=1bAR4tU3oMBLEm6VuikbuRHQMMtayHuCf",
    "https://drive.google.com/uc?export=download&id=1bpSuSPWWzsuMqueuervbvpBqLwPvw6uY",
    "https://drive.google.com/uc?export=download&id=1bt82p3vK8oEq-wAUDaZcwyiiEK0HyB0K",
    "https://drive.google.com/uc?export=download&id=1bw6s6x0G05CigsxgcTfYAdECP7pXI4mK",
    "https://drive.google.com/uc?export=download&id=1dRGXz6ncnSqDnhF6JN1RBsPwIPEq2oCm",
    "https://drive.google.com/uc?export=download&id=1dVyuHk9FEBmq9eUP0ykwTOCChb27LKBi",
    "https://drive.google.com/uc?export=download&id=1dpM7UKFCF1fYhnWeEK71r4BM9c1tkopp",
    "https://drive.google.com/uc?export=download&id=1e3-V7aeuOfY8bvIlhLuYtlnb-t0wUfQL",
    "https://drive.google.com/uc?export=download&id=1fHZmDKd88sw35GclzLUqeuTqabqOrEPM",
    "https://drive.google.com/uc?export=download&id=1fJTc6O-sOadBAosHpacYl6WsK6md_OBF",
    "https://drive.google.com/uc?export=download&id=1fg-ljQfZPtdetXVbxovEtEfQoBkJOVME",
    "https://drive.google.com/uc?export=download&id=1h8mdWDujCrNKhdsLBWDgZRvaxaeDW9xY",
    "https://drive.google.com/uc?export=download&id=1hAiL9RLIIxb99q9y9PsLpK3KS8UG5_yV",
    "https://drive.google.com/uc?export=download&id=1hmr4K2qspsUJGk18jmo66a_YvbXthO-Q",
    "https://drive.google.com/uc?export=download&id=1i-7YXf4iib-C0Qgs6JG9BbmXOUJMa2vi",
    "https://drive.google.com/uc?export=download&id=1kl6CeBtd7ow6qmBSSn_eypEcuTuV-GkR",
    "https://drive.google.com/uc?export=download&id=1lbKhm15247O3vigvIL8D663c6lZI2FQn",
    "https://drive.google.com/uc?export=download&id=1lhvuAlpe_uXTvIQyZwJkjWoq81AT_4PC",
    "https://drive.google.com/uc?export=download&id=1m8yyH9w17tprMAzEn0GxNisXeAa3mDYr",
    "https://drive.google.com/uc?export=download&id=1motPCxn2LpwFwSVoyR7Qtc8Ua3MVGXv_",
    "https://drive.google.com/uc?export=download&id=1n98z5k1CFz_cFUhZ-k7glTdtNm_Nj1_-",
    "https://drive.google.com/uc?export=download&id=1nbp_r9ASOc0JOP6OPKm7thAbncBsV2Z6",
    "https://drive.google.com/uc?export=download&id=1nx5iftKuuXAojbY-7Ho9wLKv2nxuUMR3",
    "https://drive.google.com/uc?export=download&id=1omdhIebFOdyFjSjcvadqTNmaj-8mcZAH",
    "https://drive.google.com/uc?export=download&id=1osMGDm_1UfIQfBRg-n5B6bwYAzw1nvql",
    "https://drive.google.com/uc?export=download&id=1pg6BgWAkN4VB8oHYa9W3lkkRAgnmCDWo",
    "https://drive.google.com/uc?export=download&id=1rGwEO-5SJTUTjUwNx41CSPhuC0MFOqvb",
    "https://drive.google.com/uc?export=download&id=1rJTSGeuhh1DxdfNo8i2u4wAjud4riujh",
    "https://drive.google.com/uc?export=download&id=1rcpHZxlSDTqxT4z_BwGly9n8txtBZeNT",
    "https://drive.google.com/uc?export=download&id=1rxIQM5i2SNJ91v48GRqfR4k03k1q6rTj",
    "https://drive.google.com/uc?export=download&id=1s12rq7BH5Z6BYG3-zuEIuLJGctY1zlKv",
    "https://drive.google.com/uc?export=download&id=1tDRmX8Wok3bAYwHyh16PM3AzqAE8RTaB",
    "https://drive.google.com/uc?export=download&id=1tixxm5DHXlA33Ka6B5H3QZDMUT9-AZ-h",
    "https://drive.google.com/uc?export=download&id=1uEXWiy7M0ImN15qHZgf2W80A7VS5R16J",
    "https://drive.google.com/uc?export=download&id=1uloUhfOcXrQ0nLYZhOwtjKIGihCqjApH",
    "https://drive.google.com/uc?export=download&id=1v2P_49a4TqubmKwZvEPLloxgD-Uw1VR0",
    "https://drive.google.com/uc?export=download&id=1wU4fJxeeL6AiVsUb61Xb0OMgqg0BgPVq",
    "https://drive.google.com/uc?export=download&id=1xLJK8SWtP3FKQWt71lvcs9t--K8Ka7CD",
    "https://drive.google.com/uc?export=download&id=1xPcFbW_3uqfUAhOQCvGhBNNMs1GfXMib",
    "https://drive.google.com/uc?export=download&id=1zkeLNAC9rID4ZsDydJG_Gts42cdXWT0g",
    "https://drive.google.com/uc?export=download&id=1zzRP6YH8aAJLdBYUrQ-NVkmgcFrmIXYj",
];

const photographers = [
  'Alexandre Godreau', 'Casey Horner', 'Ilya Pavlov', 'John Doe', 'Jane Smith', 'Peter Jones', 'Maria Garcia', 'Satoshi Nakamoto', 'Laura Evans', 'Chris Williams'
];

const allTags = [
  'nature', 'water', 'sky', 'mountain', 'travel', 'landscape', 'city', 'urban', 'people', 'animal', 'food', 'tech', 'abstract', 'dark', 'light', 'forest', 'beach', 'ocean', 'winter', 'summer', 'fall', 'spring', 'architecture', 'street', 'road', 'car', 'building', 'work', 'coffee', 'art'
];

// Seeded random number generator
function createSeededRandom(seed: number) {
  let state = seed;
  return function() {
    state = (state * 9301 + 49297) % 233280;
    return state / 233280;
  };
}

function getRandomElements<T>(arr: T[], count: number, random: () => number): T[] {
  const shuffled = [...arr].sort(() => 0.5 - random());
  return shuffled.slice(0, count);
}

function generatePhotos(urls: string[]): Photo[] {
  const photos: Photo[] = [];
  const seed = 123; // A fixed seed to ensure consistent "random" generation
  
  urls.forEach((url, i) => {
    const seededRandom = createSeededRandom(seed + i);
    const width = 1200;
    const height = 800;
    const tags = getRandomElements(allTags, Math.floor(seededRandom() * 5) + 4, seededRandom);
    
    // Create a more descriptive alt text
    const mainSubject = tags[0];
    const context = tags.slice(1, 3).join(' and ');
    const alt = `A high-quality photo of ${mainSubject} with elements of ${context}`;

    photos.push({
      id: i + 1,
      width,
      height,
      photographer: photographers[Math.floor(seededRandom() * photographers.length)],
      src: url,
      alt,
      tags,
      dataAiHint: tags.slice(0, 2).join(' '),
    });
  });
  return photos;
}

export const photos: Photo[] = generatePhotos(newImageUrls);
