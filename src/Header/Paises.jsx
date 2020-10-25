import React from 'react';
import { SingleSelect } from "react-select-material-ui";

import AppContext from '../AppContext';
import { countries } from '../utils/countries';
import './Paises.scss';

const Paises = React.memo((props) => (
      <AppContext.Consumer>
          {(context) => (
              <div className="paises">
                <SingleSelect
                  defaultValue={context.pais}
                  placeholder="País" 
                  options={countries}
                  onChange={country => context.setPais(country)}
                  className='class__option'
                />
              </div>
          )}
      </AppContext.Consumer>
    )
)

export default Paises;
