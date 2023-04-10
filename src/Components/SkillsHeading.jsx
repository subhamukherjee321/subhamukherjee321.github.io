import React from 'react'
import { Heading, Box } from '@chakra-ui/react'

export default function SkillsHeading({heading}) {
  return (
    <>
     <Box w='100%' p={4} textAlign = {'center'}>
     <Heading as='h2' size='lg'>{heading}</Heading>
     </Box>
    </>
  )
}
