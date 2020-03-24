import React, { useEffect, useState } from 'react';

export const asyncComponent = (importComponent) => {

   const AsyncComponent = (props) => {
      const [state, setState] = useState({
         component: null,
         isLoading: true
      })
      // adding feature of loading/spinner untill coponent gets loaded
      useEffect(() => {
         setState({
            isLoading: true
         });
         importComponent().then(({ default: component }) => {
            setState({
               component: component,
               isLoading: false
            });
         }).catch((err) => {
            setState({
               component: null,
               isLoading: false
            });
         });
      }, [])

      const { component: D, isLoading } = state;

      return (D ? <D {...props} /> : isLoading ? <div> loading ...</div> : null);

   }
   return AsyncComponent;
}