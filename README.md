
# Tuto : ComponentPropsWithRef / forwardRef

- Forward Ref va permettre de déclarer une ref dans un composant et de passer cette ref a un composant enfant 
- Etendre l'interface d'un composant avec "componantPropsWithRef<>" va permettre de faire de passer des props natif à un element html  
  sans avoir à les déclarer dans les props et dans l'interface du composant qui les reçoit `



```javascript
/**
* Composant  
*/
import { useState, forwardRef } from 'react';

export enum InputSize {
  SMALL = 'small',
  NORMAL = 'Normal',
  LARGE = 'LARGE',
}

interface Props extends React.ComponentPropsWithoutRef<'input'> {
  error?: boolean;
  className?: string;
  inputSize?: InputSize;
  onChangeValue?: React.Dispatch<React.SetStateAction<string>>;
}

const Input = forwardRef<HTMLInputElement, Props>(
  (
    { error, className: additionnalClassName, onChangeValue, ...props },
    ref
  ) => {
    const [val, setVal] = useState('');

    const handlerOnChange = (e: React.ChangeEvent) => {
      const { value } = e.target as HTMLInputElement;
      setVal(value);
      onChangeValue && onChangeValue(value);
    };

    const disableClass = props.disabled ? 'border-gray-200' : '';

    return (
      <input
        {...props}
        ref={ref}
        className={` border border-2 border-blue-600 pl-4 py-1 rounded ${additionnalClassName} ${disableClass}`}
        onChange={handlerOnChange}
        disabled={props.disabled}
      />
    );
  }
);

export default Input;

````

 ```javascript
  <Input
    ref={inputRef} // 1° Je peu passé une ref au composant et récupérer l'élément ici depuis le parent 🔥
    type="text" //2° "type" est un attribut natif d'un l'element <input>, je peu le passer en props sans avoir à le définir dans le composant 🔥🔥
    name="Nom" //2° "name" : Idem
    value={val} //2° "value" : Idem
    required // 2° required : Idem
    inputSize={InputSize.NORMAL} // 3° InputSize est une props perso, je la définis dans les props du composant <Input />
    onChangeValue={setVal} // 3° : idem
    className="ml-4" // 3° : Idem, "className n'est pas une props native d'un élément html, elle est apporté par React. Je dois donc la définir dans les props. Il faut aussi la renomer dans le composant vu que l'attribut className existe déjà. (On peu aussi le nommer différemment ici) "
            />
  ``` 


## 📖 Lesson learned

- notion

## 🛠 Stack

- React / typescript



## Run Locally


Clone project
```bash
git clone git@github.com:monProjet
```

Go to folder directory
```bash
cd monProjet
```


Install dependencies
```bash
# yarn
yarn

# npm
npm install
```

Start server
```bash
# yarn
yarn start

# npm
npm start

# Projet run on http://localhost:3000/
```




## prerequisites

- Node.js

## 🔗 Links

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://maillot-geoffrey-portfolio.xyz/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/geoffrey-maillot-06a1411bb/)
[![linkedin](https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logocolor=white)](https://github.com/Geoffrey-Maillot/)