import { Meta, StoryObj } from '@storybook/react'
import { Children } from 'react'
import { Text, TextProps } from './Text'

export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Texto',
        size: 'md'

    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'ls'],
            cotrol: {
                type: 'inline-radio'
            }

        }
    }

} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
    args: {
        size: 'sm'
    }
}

export const Large: StoryObj<TextProps> = {
    args: {
        size: 'lg'
    }
}

export const CustomComponent: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (
            <a> testsetse</a>
        )
    }
}