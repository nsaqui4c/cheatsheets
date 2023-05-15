const stores = new Set();
const traverse = (element) => {
  let store =
    element?.memoizedState?.element?.props?.store
    || element?.pendingProps?.store
    || element?.stateNode?.store;

  if (store) {
    stores.add(store);
  }

  if (element.child) {
    traverse(element.child);
  }
};

// Find the root element for React
const reactRoot = Array.from(document.querySelectorAll("*[id]")).find((el) => el?._reactRootContainer?._internalRoot?.current);

const internalRoot = reactRoot._reactRootContainer._internalRoot.current;

// Traverse the root react element to find all Redux States in the app
traverse(internalRoot);

//After running this script, all Redux States will be available inside the variable stores, and you can access them via [...stores].map((store) => store.getState()).
//store=[...stores]
//store[0].getState().crypto.aesKey
