const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

const repository = process.env.GITHUB_REPOSITORY || '';

const repo = repository.split('/')[1] || '';

/** @type {import('next').NextConfig} */

const nextConfig = {

  output: 'export',

  basePath: isGithubActions && repo ? `/${repo}` : '',

  assetPrefix: isGithubActions && repo ? `/${repo}/` : '',

  reactStrictMode: true,

  images: {

    unoptimized: true,

  },

};

export default nextConfig;
