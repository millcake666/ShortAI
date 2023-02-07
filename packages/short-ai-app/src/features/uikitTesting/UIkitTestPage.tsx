import { Box, Button, Typography } from '@mui/material'
import React from 'react'

import { Flex, Spacer } from '../primitives'

export const UIkitTestPage = () => {
  return (
    <div>
      <div>
        <Typography variant="h4">
          <b>Buttons</b>
        </Typography>

        <Typography>primary</Typography>
        <Spacer />
        <Flex gap={10}>
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>

          <Button variant="text" size="small">
            Text
          </Button>
          <Button variant="contained" size="small">
            Contained
          </Button>
          <Button variant="outlined" size="small">
            Outlined
          </Button>
        </Flex>
        <Spacer />
      </div>

      <div>
        <Typography>secondary</Typography>
        <Spacer />
        <Flex gap={10}>
          <Button color="secondary" variant="text">
            Text
          </Button>
          <Button color="secondary" variant="contained">
            Contained
          </Button>
          <Button color="secondary" variant="outlined">
            Outlined
          </Button>

          <Button color="secondary" variant="text" size="small">
            Text
          </Button>
          <Button color="secondary" variant="contained" size="small">
            Contained
          </Button>
          <Button color="secondary" variant="outlined" size="small">
            Outlined
          </Button>
        </Flex>
        <Spacer />
      </div>
      <Spacer space={50} />

      <Typography variant="h4">
        <b>Typography</b>
      </Typography>
      <Box sx={{ width: '100%', maxWidth: 500 }}>
        <Typography variant="h1" gutterBottom>
          h1. Heading
        </Typography>
        <Typography variant="h2" gutterBottom>
          h2. Heading
        </Typography>
        <Typography variant="h3" gutterBottom>
          h3. Heading
        </Typography>
        <Typography variant="h4" gutterBottom>
          h4. Heading
        </Typography>
        <Typography variant="h5" gutterBottom>
          h5. Heading
        </Typography>
        <Typography variant="h6" gutterBottom>
          h6. Heading
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis
          tenetur
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis
          tenetur
        </Typography>
        <Typography variant="body1" gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate
          numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="body2" gutterBottom>
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate
          numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="button" display="block" gutterBottom>
          button text
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          caption text
        </Typography>
      </Box>
    </div>
  )
}
