import { createClient } from '@sanity/client';
import imgUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: process.env.PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: process.env.TOKEN,
});

const builder = imgUrlBuilder(client);

export const urlFor = (source) => builder.image(source);