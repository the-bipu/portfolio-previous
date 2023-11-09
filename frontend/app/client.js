import { createClient } from '@sanity/client';
import imgUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: 'eym3i9v7',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'skloX0w8wUnLd0gveqE6BrlaeWR83Ca47xfomkSIC3UmHT7TDxBwWeMSRnf82YleKGjp7fbsy3kk8YrDOXSIr5h3lTduJfbmzuEGL8IEzYJujDTPywQL2rZPaAvfqylWBlroEMj4Ht6SaTrczJWquDBDwjVjJhvKWMhvTwBlOJ4L7dqugNDD',
});

const builder = imgUrlBuilder(client);

export const urlFor = (source) => builder.image(source);