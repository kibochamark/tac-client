import { createTheme, MantineColorsTuple } from "@mantine/core";

const myColor: MantineColorsTuple = [
    '#f3eaff',
    '#e0d1ff',
    '#bca1fb',
    '#8b5cf6',
    '#7741f3',
    '#6325f2',
    '#5916f2',
    '#490ad8',
    '#4007c2',
    '#3502ab'
];

export const theme = createTheme({
    primaryColor: 'myColor',
    colors: {
        myColor,
    }
});
