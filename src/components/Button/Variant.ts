import theme from '../../styles/theme';

const COLORS = theme.COLORS;

interface ButtonStyle{
    button: {
        backgroundColor: string;
        borderWidth?:number;
        borderColor?:string;
    };
    title: {
        color: string;
    };
    icon:{
        color: string;
    }
}

export interface ButtonVariant{
    enabled: ButtonStyle;
    disabled: ButtonStyle;
}

const buttonPrimary: ButtonVariant = {
    enabled: {
        button: {
            backgroundColor: COLORS.PURPLEDARK1,
        },
        title: {
            color: COLORS.WHITE,
        },
        icon: {
            color: COLORS.WHITE,
        },
    },
    disabled: {
        button: {
            backgroundColor: COLORS.GRAY4,
        },
        title: {
            color: COLORS.GRAY2,
        },
        icon: {
            color: COLORS.GRAY2,
        },
    },
}

const buttonOutline: ButtonVariant = {
    enabled: {
        button: {
            backgroundColor: "transparent",
            borderWidth: 2,
            borderColor:COLORS.PURPLEDARK1,
        },
        title: {
            color: COLORS.PURPLEDARK1,
        },
        icon: {
            color: COLORS.PURPLEDARK1,
        },
    },
    disabled: {
        button: {
            backgroundColor: "transparent",
            borderWidth: 2,
            borderColor: COLORS.GRAY4,
        },
        title: {
            color: COLORS.GRAY4,
        },
        icon: {
            color: COLORS.GRAY4,
        },
    },
}

const buttonBlack: ButtonVariant = {
    enabled: {
        button: {
            backgroundColor: COLORS.TEXTDARK,
        },
        title: {
            color: COLORS.PURPLEDARK1,
        },
        icon: {
            color: COLORS.PURPLEDARK1,
        },
    },
    disabled: {
        button: {
            backgroundColor: COLORS.GRAY4,
        },
        title: {
            color: COLORS.GRAY2,
        },
        icon: {
            color: COLORS.GRAY2,
        },
    },
}

export const variants = {
    primary: buttonPrimary,
    outline: buttonOutline,
    black: buttonBlack
}

