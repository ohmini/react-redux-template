import { configure } from '@storybook/react'
import '../../index.css'

function loadStories() {
  require('../home/Home.story')
}

configure(loadStories, module)
