/** @type {import('next').NextConfig} */
const nextConfig = {
	...(process.env.IS_STANDALONE ? { output: 'standalone' } : {}),
	eslint: { ignoreDuringBuilds: true },
	typescript: { ignoreBuildErrors: true }
}

export default nextConfig
