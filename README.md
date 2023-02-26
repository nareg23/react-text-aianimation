# react-text-aianimation

 - small library for a cool text animation with no dependencies.
 - type safe.
 - highly customizable.

## Import

```
import { AiText } from "react-text-aianimation";
```

### Usage

```
export default function App() {
  return (
    <div className="App">
      <AiText
        text="terminator"
        speed={100}
        styles={{ color: "gray", fontWeight: "bold" }}
        loops={2}
      />
    </div>
  );
}
```

| Props | Type | Example |
| ----------- | ----------- | --------|
| Header | Title |
| text (required) | string | `text={"terminator"}` |      
| lowerCase | boolean | `lowerCase` |
| speed | number | `speed={50}` |
| styles | object |`style={{ color:'#fff' }} `|
| loops | Enum 1 , 2 or 3 | `loops={3}`|

---

thank you for installing!

*currently We have a single component, but we're working on adding more.*



