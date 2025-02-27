/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    localPatterns: [
      {
        pathname: 'public/**/*',
        search: '',
      }
    ]
  }
};

export default nextConfig;

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';
initOpenNextCloudflareForDev();
