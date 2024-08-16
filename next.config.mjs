/** @type {import('next').NextConfig} */
import {
    withHydrationOverlay,
  } from "@builder.io/react-hydration-overlay/next";
  
const nextConfig = {
    experimental:{
serverActions:true,
serverComponentsExternalPackages:["mongoose"]
    },
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'img.clerk.com'
            },
            {
                protocol:"https",
                hostname:"images.clerk.dev"
            },
            {
                protocol:"https",
                hostname:"uploadthing.com"
            },
            {
                protocol:"https",
                hostname:'placehold.co'
            },
        ],
        
    }
};

export default withHydrationOverlay({
    /**
     * Optional: `appRootSelector` is the selector for the root element of your app. By default, it is `#__next` which works
     * for Next.js apps with pages directory. If you are using the app directory, you should change this to `main`.
     */
    appRootSelector: "main",
  })(nextConfig);
