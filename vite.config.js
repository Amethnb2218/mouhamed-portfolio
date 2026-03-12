import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function getGithubPagesBase() {
  if (process.env.GITHUB_ACTIONS !== 'true') {
    return '/'
  }

  const repository = process.env.GITHUB_REPOSITORY || ''
  const repoName = repository.split('/')[1] || ''

  if (!repoName || repoName.endsWith('.github.io')) {
    return '/'
  }

  return `/${repoName}/`
}

export default defineConfig({
  plugins: [react()],
  base: getGithubPagesBase(),
  server: { port: 5174 }
})
