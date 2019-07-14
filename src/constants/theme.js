const colors = {
    accent: "#F3534A",
    primary: "#0AC4BA",
    secondary: "#2BDA8E",
    tertiary: "#FFE358",
    black: "#323643",
    white: "#FFFFFF",
    gray: "#9DA3B4",
    gray2: "#C5CCD6",
    gray3: "#F0F0F0",
    gray4: "#F7F8FA",
};

const sizes = {
    // global sizes
    base: 16,
    font: 14,
    radius: 6,
    padding: 25,

    // font sizes
    h1: 26,
    h2: 20,
    h3: 18,
    title: 18,
    header: 16,
    body: 14,
    caption: 12,
};

const fonts = {
    h1: {
        fontFamily: "Rubik-Light",
        fontSize: sizes.h1
    },
    h2: {
        fontFamily: "Rubik-Medium",
        fontSize: sizes.h2
    },
    h3: {
        fontFamily: "Rubik-Regular",
        fontSize: sizes.h3
    },
    header: {
        fontSize: sizes.header,
        fontFamily: "Rubik-Bold",
    },
    title: {
        fontFamily: "Rubik-Regular",
        fontSize: sizes.title
    },
    body: {
        fontSize: sizes.body
    },
    caption: {
        fontSize: sizes.caption
    },
};

const dimensions = {
    header: {
        height: 60,
        width: '100%'
    }
}

export { colors, sizes, fonts, dimensions };