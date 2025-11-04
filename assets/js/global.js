const parseRem = (input) => {
        return (input / 10) * parseFloat($("html").css("font-size"));
    };