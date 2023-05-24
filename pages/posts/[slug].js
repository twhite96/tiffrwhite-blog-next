import { getStaticPaths } from 'next/router'

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}