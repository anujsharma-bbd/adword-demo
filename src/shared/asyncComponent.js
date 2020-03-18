import React from 'react';

export const asyncComponent = (importComponent) => {

   class AsyncComponent extends React.Component {
      constructor(props) {
         super(props);
         this.state = {
            component: null,
            isLoading: true
         };
      }
      // async componentDidMount() {
      //    const { default: component } = await importComponent();
      //    this.setState({
      //       component: null
      //    });
      // }
      // adding feature of loading/spinner untill coponent gets loaded
      componentDidMount() {
         this.setState({
            isLoading: true
         });
         importComponent().then(({ default: component }) => {
            this.setState({
               component: component,
               isLoading: false
            });
         }).catch((err) => {
            this.setState({
               component: null,
               isLoading: false
            });
         });

      }
      render() {
         const { component: D, isLoading } = this.state;
         return (
            D ? <D {...this.props} /> : isLoading ? <div> loading ...</div> : null
         );
      }

   }
   return AsyncComponent;
}