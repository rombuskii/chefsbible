import React from 'react'
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

const Recipe = () => {
  return (
    <div>
      <h3>Recipe</h3>
      <p>Welcome To Recipe</p>
    </div>
  )
}

export default Recipe

export const getServerSideProps = withPageAuthRequired();