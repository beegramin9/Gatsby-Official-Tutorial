const theme = {
    fonts: {
        main: 'Muli, sans-serif',
        code: 'Roboto Mono, monospace'
    },
    colors : {
        main1: 'hsl(207, 70%, 59%)',
        main2: 'hsl(207, 70%, 94%)',
        dark1: 'hsl(227, 2%, 12%)',
        dark2: 'hsl(227, 2%, 26%)',
        dark3: 'hsl(227, 2%, 64%)',
        light1: 'hsl(0, 0%, 97%)',
        light2: 'hsl(0, 0%, 99%)',
        red: "rgb(252, 158, 148)",
        redbrown: "#d4c0c0",
        orangeyellow: "hsl(34.9,98.6%, 55%)",
        yellow: "rgb(243, 210, 179)",
        darkgreen: "rgb(72, 98, 74)",
        skyblue: "rgb(135, 209, 210)",
        blue: "hsl(205.1,100%,36.1%)",
        buttonpurple: "rgb(122, 109, 211)",
        darkpurple: "hsl(232.7,27.3%,23.7%)",
    },
    breakpoints: {
        tablet: "only screen and (max-width: 65rem)",
        mobile: "only screen and (max-width: 50rem)"
    },
    spacings: {
        xxSmall: '.25rem',
        xSmall: '.5rem',
        small: '1rem',
        medium: '2rem',
        large: '3.5rem',
        xLarge: '4rem',
        xxLarge: '6rem',
    }, 
    animations : {
        button: 'box-shadow .3s ease',
        link: 'color .2s ease'
    },
    shadows: {
        shadow1: '0px 8px 16px rgba(0, 0, 0, 0.45)'
    }
}

export default theme;