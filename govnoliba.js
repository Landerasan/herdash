const govnoliba = {
    init(){
        let styleSheet;
        if(Object.is(document.querySelector("style"), null)){
            styleSheet = document.createElement("style");
            document.querySelector("html").appendChild(styleSheet);
        }
        else{
            styleSheet = document.querySelector("style");
        }
        return styleSheet;
    },
    getSelectors(styleSheet){
        let regex = new RegExp(`(?<=}|^)([^{}]*)(?={)`, "gm")
        return styleSheet.match(regex);
    },
    getModifiers(selector, styleSheet){
        let regex = new RegExp(`(?<=${selector}{)([^}]*)(?=})`, "g");
        let modifiers = styleSheet.match(regex);
        let styles = modifiers[0].split(/:|;/);
        styles.splice(-1,1);
        let styleObject = new Object;
        for(let i = 0; i < styles.length; i = i + 2){
            styleObject[styles[i]] = styles[i+1];
        }
        return styleObject;        
    },
    parseStyle(styleSheet){
        let selectors = this.getSelectors(styleSheet);
        let styles = new Object;
        for(let i = 0; i < selectors.length; i++){
            styles[selectors[i]] = this.getModifiers(selectors[i], styleSheet)
        }
        return styles;
    },
    changeStyleSheet(styles){
        let text = "";
        for(let i = 0; i < Object.keys(styles).length; i++){
            text += Object.keys(styles)[i] + "{";
            for(let j = 0; j <  Object.keys(styles[Object.keys(styles)[i]]).length; j++){
                text += Object.keys(styles[Object.keys(styles)[i]])[j] + ":";
                text += styles[Object.keys(styles)[i]][Object.keys(styles[Object.keys(styles)[i]])[j]] + ";";
            }
            text += "}"
        }
        styleSheet.innerHTML = text;
    }
}

let styleSheet = govnoliba.init();
let styleSheetText = styleSheet.innerHTML;
