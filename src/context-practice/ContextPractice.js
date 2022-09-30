import ColorBox from "./components/ColorBox";
import {ColorProvider} from "./contexts/color";
import SelectColors from "./components/SelectColors";
import SelectColorsClass from "./components/SelectColorsClass";

const ContextPractice = () => {
    return (
        <ColorProvider>
            <div>
                {/*<SelectColors/>*/}
                <SelectColorsClass/>
                <ColorBox/>
            </div>
        </ColorProvider>
    );
}

export default ContextPractice;