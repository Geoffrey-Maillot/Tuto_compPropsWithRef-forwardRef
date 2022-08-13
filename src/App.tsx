import { useState, useRef } from 'react';
import ForwardInput from './ForwardInput';

import Input, { InputSize } from './Input';
import InputWithoutRef from './InputWithoutRef';
import OldInput from './OldInput';

export default function App() {
  const [val, setVal] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="w-full min-h-screen font-sans">
      <header className="bg-neutral-50 py-10 text-center">
        <h1 className="text-xl text-bold">
          {"TUTO  : ComponentPropsWith[out]Ref<'elementHtml'>"}
        </h1>
      </header>

      <main className="mt-12 flex justify-center items-center flex-col">
        <section className="w-full mt-12 flex justify-center items-center flex-col">
          <label className="font-semibold mb-5">
            Input :
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
          </label>

          <p>
            Valeur de l'input à partir de la ref du composant enfant :{' '}
            <span className="font-semibold">
              {inputRef.current && inputRef.current.value}{' '}
            </span>
          </p>
          <p>
            {' '}
            Valeur de l'input à partir du state du parent :{' '}
            <span className="font-semibold">
              {inputRef.current && inputRef.current.value}{' '}
            </span>
          </p>
        </section>{' '}
        <label className="font-semibold mb-5 mt-5">
          OldInput :
          <OldInput
            //ref={inputRef}
            type="text"
            name="Nom"
            inputSize={InputSize.NORMAL}
            onChangeValue={setVal}
            value={val}
            className="ml-4"
            //required | => required n'a pas été définis dans les props de oldProps, il y aura une erreur
          />
        </label>{' '}
        <label className="font-semibold mb-5 mt-5">
          ForwardInput :
          <ForwardInput
            ref={inputRef}
            type="text"
            name="Nom"
            inputSize={InputSize.NORMAL}
            onChangeValue={setVal}
            value={val}
            className="ml-4"
            //required | => required n'a pas été définis dans les props de oldProps, il y aura une erreur
          />
        </label>
        <label className="font-semibold mb-5 mt-5">
          InputWithoutRef :
          <InputWithoutRef
            type="text"
            name="Nom"
            inputSize={InputSize.NORMAL}
            onChangeValue={setVal}
            value={val}
            className="ml-4"
            //required | => required n'a pas été définis dans les props de oldProps, il y aura une erreur
          />
        </label>
      </main>
    </div>
  );
}
