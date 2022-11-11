/**
 * 
 * author by Chinnamon
 * 
 */


interface CampaignSubscribableFunctions<T> {
      [key: string]: CampaignBindingHandler;
  
    //   notifySubscribers(valueToWrite?: T, event?: string): void;
  }
  
  interface CampaignComputedFunctions<T> {
      [key: string]: CampaignBindingHandler;
  }
  
  interface CampaignObservableFunctions<T> {
      [key: string]: CampaignBindingHandler;
  
    //   equalityComparer(a: any, b: any): boolean;
  }
  
  interface CampaignObservableArrayFunctions<T> {
    // General Array functions
    //   indexOf(searchElement: T, fromIndex?: number): number;
    //   slice(start: number, end?: number): T[];
    //   splice(start: number): T[];
    //   splice(start: number, deleteCount: number, ...items: T[]): T[];
    //   pop(): T;
    //   push(...items: T[]): void;
    //   shift(): T;
    //   unshift(...items: T[]): number;
    //   reverse(): CampaignObservableArray<T>;
    //   sort(): CampaignObservableArray<T>;
    //   sort(compareFunction: (left: T, right: T) => number): CampaignObservableArray<T>;
  
      // Campaign specific
      [key: string]: CampaignBindingHandler;
  
    //   replace(oldItem: T, newItem: T): void;
  
    //   remove(item: T): T[];
    //   remove(removeFunction: (item: T) => boolean): T[];
    //   removeAll(items: T[]): T[];
    //   removeAll(): T[];
  
    //   destroy(item: T): void;
    //   destroy(destroyFunction: (item: T) => boolean): void;
    //   destroyAll(items: T[]): void;
    //   destroyAll(): void;
  }
  
  interface CampaignSubscribableStatic {
      fn: CampaignSubscribableFunctions<any>;
  
      new <T>(): CampaignSubscribable<T>;
  }
  
  interface CampaignSubscription {
      dispose(): void;
  }
  
  interface CampaignSubscribable<T> extends CampaignSubscribableFunctions<T> {
    //   subscribe(callback: (newValue: T) => void, target?: any, event?: string): CampaignSubscription;
    //   subscribe<TEvent>(callback: (newValue: TEvent) => void, target: any, event: string): CampaignSubscription;
    //   extend(requestedExtenders: { [key: string]: any; }): CampaignSubscribable<T>;
    //   getSubscriptionsCount(): number;
  }
  
  interface CampaignComputedStatic {
      fn: CampaignComputedFunctions<any>;
  
      <T>(): CampaignComputed<T>;
      <T>(func: () => T, context?: any, options?: any): CampaignComputed<T>;
      <T>(def: CampaignComputedDefine<T>, context?: any): CampaignComputed<T>;
  }
  
  interface CampaignComputed<T> extends CampaignObservable<T>, CampaignComputedFunctions<T> {
      fn: CampaignComputedFunctions<any>;
  
    //   dispose(): void;
    //   isActive(): boolean;
    //   getDependenciesCount(): number;
    //   extend(requestedExtenders: { [key: string]: any; }): CampaignComputed<T>;
  }
  
  interface CampaignObservableArrayStatic {
      fn: CampaignObservableArrayFunctions<any>;
  
      <T>(value?: T[]): CampaignObservableArray<T>;
  }
  
  interface CampaignObservableArray<T> extends CampaignObservable<T[]>, CampaignObservableArrayFunctions<T> {
    //   extend(requestedExtenders: { [key: string]: any; }): CampaignObservableArray<T>;
  }
  
  interface CampaignObservableStatic {
      fn: CampaignObservableFunctions<any>;
  
      <T>(value?: T): CampaignObservable<T>;
  }
  
  interface CampaignObservable<T> extends CampaignSubscribable<T>, CampaignObservableFunctions<T> {
      (): T;
      (value: T): void;
  
    //   peek(): T;
    //   valueHasMutated?:{(): void;};
    //   valueWillMutate?:{(): void;};
    //   extend(requestedExtenders: { [key: string]: any; }): CampaignObservable<T>;
  }
  
  interface CampaignComputedDefine<T> {
      read(): T;
      write? (value: T): void;
      disposeWhenNodeIsRemoved?: Node;
      disposeWhen? (): boolean;
      owner?: any;
      deferEvaluation?: boolean;
      pure?: boolean;
  }
  
  interface CampaignBindingContext {
      $parent: any;
      $parents: any[];
      $root: any;
      $data: any;
      $rawData: any | CampaignObservable<any>;
      $index?: CampaignObservable<number>;
      $parentContext?: CampaignBindingContext;
      $component: any;
      $componentTemplateNodes: Node[];
  
      extend(properties: any): any;
      createChildContext(dataItemOrAccessor: any, dataItemAlias?: any, extendCallback?: Function): any;
  }
  
  interface CampaignAllBindingsAccessor {
      (): any;
      get(name: string): any;
      has(name: string): boolean;
  }
  
  interface CampaignBindingHandler {
      after?: Array<string>;
      init?: (element: any, valueAccessor: () => any, allBindingsAccessor?: CampaignAllBindingsAccessor, viewModel?: any, bindingContext?: CampaignBindingContext) => void | { controlsDescendantBindings: boolean; };
      update?: (element: any, valueAccessor: () => any, allBindingsAccessor?: CampaignAllBindingsAccessor, viewModel?: any, bindingContext?: CampaignBindingContext) => void;
      options?: any;
      preprocess?: (value: string, name: string, addBindingCallback?: (name: string, value: string) => void) => string;
  }
  
  interface CampaignBindingHandlers {
      [bindingHandler: string]: CampaignBindingHandler;
  
      // Controlling text and appearance
      visible: CampaignBindingHandler;
      text: CampaignBindingHandler;
      html: CampaignBindingHandler;
      css: CampaignBindingHandler;
      style: CampaignBindingHandler;
      attr: CampaignBindingHandler;
  
      // Control Flow
      foreach: CampaignBindingHandler;
      if: CampaignBindingHandler;
      ifnot: CampaignBindingHandler;
      with: CampaignBindingHandler;
  
      // Working with form fields
      click: CampaignBindingHandler;
      event: CampaignBindingHandler;
      submit: CampaignBindingHandler;
      enable: CampaignBindingHandler;
      disable: CampaignBindingHandler;
      value: CampaignBindingHandler;
      textInput: CampaignBindingHandler;
      hasfocus: CampaignBindingHandler;
      checked: CampaignBindingHandler;
      options: CampaignBindingHandler;
      selectedOptions: CampaignBindingHandler;
      uniqueName: CampaignBindingHandler;
  
      // Rendering templates
      template: CampaignBindingHandler;
  
      // Components (new for v3.2)
      component: CampaignBindingHandler;
  }
  
  interface CampaignMemoization {
      memoize(callback: () => string): string;
      unmemoize(memoId: string, callbackParams: any[]): boolean;
      unmemoizeDomNodeAndDescendants(domNode: any, extraCallbackParamsArray: any[]): boolean;
      parseMemoText(memoText: string): string;
  }
  
  interface CampaignVirtualElement {}
  
  interface CampaignVirtualElements {
      allowedBindings: { [bindingName: string]: boolean; };
      emptyNode(node: CampaignVirtualElement ): void;
      firstChild(node: CampaignVirtualElement ): CampaignVirtualElement;
      insertAfter( container: CampaignVirtualElement, nodeToInsert: Node, insertAfter: Node ): void;
      nextSibling(node: CampaignVirtualElement): Node;
      prepend(node: CampaignVirtualElement, toInsert: Node ): void;
      setDomNodeChildren(node: CampaignVirtualElement, newChildren: { length: number;[index: number]: Node; } ): void;
      childNodes(node: CampaignVirtualElement ): Node[];
  }
  
  interface CampaignExtenders {
      throttle(target: any, timeout: number): CampaignComputed<any>;
      notify(target: any, notifyWhen: string): any;
  
      rateLimit(target: any, timeout: number): any;
      rateLimit(target: any, options: { timeout: number; method?: string; }): any;
  
      trackArrayChanges(target: any): any;
  }
  
  //
  // NOTE TO MAINTAINERS AND CONTRIBUTORS : pay attention to only include symbols that are
  // publicly exported in the minified version of Campaign, without that you can give the false
  // impression that some functions will be available in production builds.
  //
  interface CampaignUtils {
      //////////////////////////////////
      // utils.domData.js
      //////////////////////////////////
  
      domData: {
          get (node: Element, key: string): any;
  
          set (node: Element, key: string, value: any): void;
  
          getAll(node: Element, createIfNotFound: boolean): any;
  
          clear(node: Element): boolean;
      };
  
      //////////////////////////////////
      // utils.domNodeDisposal.js
      //////////////////////////////////
  
      domNodeDisposal: {
          addDisposeCallback(node: Element, callback: Function): void;
  
          removeDisposeCallback(node: Element, callback: Function): void;
  
          cleanNode(node: Node): Element;
  
          removeNode(node: Node): void;
      };
  
      addOrRemoveItem<T>(array: T[] | CampaignObservable<T>, value: T, included: T): void;
  
      arrayFilter<T>(array: T[], predicate: (item: T) => boolean): T[];
  
      arrayFirst<T>(array: T[], predicate: (item: T) => boolean, predicateOwner?: any): T;
  
      arrayForEach<T>(array: T[], action: (item: T, index: number) => void): void;
  
      arrayGetDistinctValues<T>(array: T[]): T[];
  
      arrayIndexOf<T>(array: T[], item: T): number;
  
      arrayMap<T, U>(array: T[], mapping: (item: T) => U): U[];
  
      arrayPushAll<T>(array: T[] | CampaignObservableArray<T>, valuesToPush: T[]): T[];
  
      arrayRemoveItem(array: any[], itemToRemove: any): void;
  
      compareArrays<T>(a: T[], b: T[]): Array<CampaignArrayChange<T>>;
  
      extend(target: Object, source: Object): Object;
  
      fieldsIncludedWithJsonPost: any[];
  
      getFormFields(form: any, fieldName: string): any[];
  
      objectForEach(obj: any, action: (key: any, value: any) => void): void;
  
      parseHtmlFragment(html: string): any[];
  
      parseJson(jsonString: string): any;
  
      postJson(urlOrForm: any, data: any, options: any): void;
  
      peeCampaignbservable<T>(value: CampaignObservable<T>): T;
  
      range(min: any, max: any): any;
  
      registerEventHandler(element: any, eventType: any, handler: Function): void;
  
      setHtml(node: Element, html: () => string): void;
  
      setHtml(node: Element, html: string): void;
  
      setTextContent(element: any, textContent: string | CampaignObservable<string>): void;
  
      stringifyJson(data: any, replacer?: Function, space?: string): string;
  
      toggleDomNodeCssClass(node: any, className: string, shouldHaveClass: boolean): void;
  
      triggerEvent(element: any, eventType: any): void;
  
      unwrapObservable<T>(value: CampaignObservable<T> | T): T;
  
      // NOT PART OF THE MINIFIED API SURFACE (ONLY IN Campaign-{version}.debug.js) https://github.com/SteveSanderson/Campaign/issues/670
      // forceRefresh(node: any): void;
      // ieVersion: number;
      // isIe6: boolean;
      // isIe7: boolean;
      // jQueryHtmlParse(html: string): any[];
      // makeArray(arrayLikeObject: any): any[];
      // moveCleanedNodesToContainerElement(nodes: any[]): HTMLElement;
      // replaceDomNodes(nodeToReplaceOrNodeArray: any, newNodesArray: any[]): void;
      // setDomNodeChildren(domNode: any, childNodes: any[]): void;
      // setElementName(element: any, name: string): void;
      // setOptionNodeSelectionState(optionNode: any, isSelected: boolean): void;
      // simpleHtmlParse(html: string): any[];
      // stringStartsWith(str: string, startsWith: string): boolean;
      // stringTokenize(str: string, delimiter: string): string[];
      // stringTrim(str: string): string;
      // tagNameLower(element: any): string;
  }
  
  interface CampaignArrayChange<T> {
      status: string;
      value: T;
      index: number;
      moved?: number;
  }
  
  //////////////////////////////////
  // templateSources.js
  //////////////////////////////////
  
  interface CampaignTemplateSourcesDomElement {
      text(): any;
      text(value: any): void;
  
      data(key: string): any;
      data(key: string, value: any): any;
  }
  
  interface CampaignTemplateAnonymous extends CampaignTemplateSourcesDomElement {
      nodes(): any;
      nodes(value: any): void;
  }
  
  interface CampaignTemplateSources {
  
      domElement: {
          prototype: CampaignTemplateSourcesDomElement
          new (element: Element): CampaignTemplateSourcesDomElement
      };
  
      anonymousTemplate: {
          prototype: CampaignTemplateAnonymous;
          new (element: Element): CampaignTemplateAnonymous;
      };
  }
  
  //////////////////////////////////
  // nativeTemplateEngine.js
  //////////////////////////////////
  
  interface CampaignNativeTemplateEngine {
  
      renderTemplateSource(templateSource: Object, bindingContext?: CampaignBindingContext, options?: Object): any[];
  }
  
  //////////////////////////////////
  // templateEngine.js
  //////////////////////////////////
  
  interface CampaignTemplateEngine extends CampaignNativeTemplateEngine {
  
      createJavaScriptEvaluatorBlock(script: string): string;
  
      makeTemplateSource(template: any, templateDocument?: Document): any;
  
      renderTemplate(template: any, bindingContext: CampaignBindingContext, options: Object, templateDocument: Document): any;
  
      isTemplateRewritten(template: any, templateDocument: Document): boolean;
  
      rewriteTemplate(template: any, rewriterCallback: Function, templateDocument: Document): void;
  }
  
  //////////////////////////////////
  // tasks.js
  //////////////////////////////////
  
  interface CampaignTasks {
      scheduler: (callback: Function) => any;
      schedule(task: Function): number;
      cancel(handle: number): void;
      runEarly(): void;
  }
  
  /////////////////////////////////
  
  interface CampaignStatic {
      utils: CampaignUtils;
      memoization: CampaignMemoization;
  
      bindingHandlers: CampaignBindingHandlers;
      getBindingHandler(handler: string): CampaignBindingHandler;
  
      virtualElements: CampaignVirtualElements;
      extenders: CampaignExtenders;
  
      applyBindings(viewModelOrBindingContext?: any, rootNode?: any): void;
      applyBindingsToDescendants(viewModelOrBindingContext: any, rootNode: any): void;
      applyBindingAccessorsToNode(node: Node, bindings: (bindingContext: CampaignBindingContext, node: Node) => {}, bindingContext: CampaignBindingContext): void;
      applyBindingAccessorsToNode(node: Node, bindings: {}, bindingContext: CampaignBindingContext): void;
      applyBindingAccessorsToNode(node: Node, bindings: (bindingContext: CampaignBindingContext, node: Node) => {}, viewModel: any): void;
      applyBindingAccessorsToNode(node: Node, bindings: {}, viewModel: any): void;
      applyBindingsToNode(node: Node, bindings: any, viewModelOrBindingContext?: any): any;
  
      subscribable: CampaignSubscribableStatic;
      observable: CampaignObservableStatic;
  
      computed: CampaignComputedStatic;
      pureComputed<T>(evaluatorFunction: () => T, context?: any): CampaignComputed<T>;
      pureComputed<T>(options: CampaignComputedDefine<T>, context?: any): CampaignComputed<T>;
  
      observableArray: CampaignObservableArrayStatic;
  
      contextFor(node: any): any;
      isSubscribable(instance: any): instance is CampaignSubscribable<any>;
      toJSON(viewModel: any, replacer?: Function, space?: any): string;
      toJS(viewModel: any): any;
      isObservable(instance: any): instance is CampaignObservable<any>;
      isWriteableObservable(instance: any): instance is CampaignObservable<any>;
      isComputed(instance: any): instance is CampaignComputed<any>;
      dataFor(node: any): any;
      removeNode(node: Element): void;
      cleanNode(node: Element): Element;
      renderTemplate(template: Function, viewModel: any, options?: any, target?: any, renderMode?: any): any;
      renderTemplate(template: string, viewModel: any, options?: any, target?: any, renderMode?: any): any;
      unwrap<T>(value: CampaignObservable<T> | T): T;
  
      computedContext: CampaignComputedContext;
  
      //////////////////////////////////
      // templateSources.js
      //////////////////////////////////
  
      templateSources: CampaignTemplateSources;
  
      //////////////////////////////////
      // templateEngine.js
      //////////////////////////////////
  
      templateEngine: {
  
          prototype: CampaignTemplateEngine;
  
          new (): CampaignTemplateEngine;
      };
  
      //////////////////////////////////
      // templateRewriting.js
      //////////////////////////////////
  
      templateRewriting: {
  
          ensureTemplateIsRewritten(template: Node, templateEngine: CampaignTemplateEngine, templateDocument: Document): any;
          ensureTemplateIsRewritten(template: string, templateEngine: CampaignTemplateEngine, templateDocument: Document): any;
  
          memoizeBindingAttributeSyntax(htmlString: string, templateEngine: CampaignTemplateEngine): any;
  
          applyMemoizedBindingsToNextSibling(bindings: any, nodeName: string): string;
      };
  
      //////////////////////////////////
      // nativeTemplateEngine.js
      //////////////////////////////////
  
      nativeTemplateEngine: {
  
          prototype: CampaignNativeTemplateEngine;
  
          new (): CampaignNativeTemplateEngine;
  
          instance: CampaignNativeTemplateEngine;
      };
  
      //////////////////////////////////
      // jqueryTmplTemplateEngine.js
      //////////////////////////////////
  
      jqueryTmplTemplateEngine: {
  
          prototype: CampaignTemplateEngine;
  
          renderTemplateSource(templateSource: Object, bindingContext: CampaignBindingContext, options: Object): Node[];
  
          createJavaScriptEvaluatorBlock(script: string): string;
  
          addTemplate(templateName: string, templateMarkup: string): void;
      };
  
      //////////////////////////////////
      // templating.js
      //////////////////////////////////
  
      setTemplateEngine(templateEngine: CampaignNativeTemplateEngine): void;
  
      renderTemplate(template: Function, dataOrBindingContext: CampaignBindingContext, options: Object, targetNodeOrNodeArray: Node, renderMode: string): any;
      renderTemplate(template: any, dataOrBindingContext: CampaignBindingContext, options: Object, targetNodeOrNodeArray: Node, renderMode: string): any;
      renderTemplate(template: Function, dataOrBindingContext: any, options: Object, targetNodeOrNodeArray: Node, renderMode: string): any;
      renderTemplate(template: any, dataOrBindingContext: any, options: Object, targetNodeOrNodeArray: Node, renderMode: string): any;
      renderTemplate(template: Function, dataOrBindingContext: CampaignBindingContext, options: Object, targetNodeOrNodeArray: Node[], renderMode: string): any;
      renderTemplate(template: any, dataOrBindingContext: CampaignBindingContext, options: Object, targetNodeOrNodeArray: Node[], renderMode: string): any;
      renderTemplate(template: Function, dataOrBindingContext: any, options: Object, targetNodeOrNodeArray: Node[], renderMode: string): any;
      renderTemplate(template: any, dataOrBindingContext: any, options: Object, targetNodeOrNodeArray: Node[], renderMode: string): any;
  
      renderTemplateForEach(template: Function, arrayOrObservableArray: any[], options: Object, targetNode: Node, parentBindingContext: CampaignBindingContext): any;
      renderTemplateForEach(template: any, arrayOrObservableArray: any[], options: Object, targetNode: Node, parentBindingContext: CampaignBindingContext): any;
      renderTemplateForEach(template: Function, arrayOrObservableArray: CampaignObservable<any>, options: Object, targetNode: Node, parentBindingContext: CampaignBindingContext): any;
      renderTemplateForEach(template: any, arrayOrObservableArray: CampaignObservable<any>, options: Object, targetNode: Node, parentBindingContext: CampaignBindingContext): any;
  
      expressionRewriting: {
          bindingRewriteValidators: any[];
          twoWayBindings: any;
          parseObjectLiteral: (objectLiteralString: string) => any[];
  
          /**
           Internal, private Campaign utility for updating model properties from within bindings
           property:            If the property being updated is (or might be) an observable, pass it here
           If it turns out to be a writable observable, it will be written to directly
           allBindings:         An object with a get method to retrieve bindings in the current execution context.
           This will be searched for a '_Campaign_property_writers' property in case you're writing to a non-observable
           (See note below)
           key:                 The key identifying the property to be written. Example: for { hasFocus: myValue }, write to 'myValue' by specifying the key 'hasFocus'
           value:               The value to be written
           checkIfDifferent:    If true, and if the property being written is a writable observable, the value will only be written if
           it is !== existing value on that writable observable
  
           Note that if you need to write to the viewModel without an observable property,
           you need to set Campaign.expressionRewriting.twoWayBindings[key] = true; *before* the binding evaluation.
           */
          writeValueToProperty: (property: CampaignObservable<any> | any, allBindings: CampaignAllBindingsAccessor, key: string, value: any, checkIfDifferent?: boolean) => void;
      };
  
      /////////////////////////////////
  
      bindingProvider: {
          instance: CampaignBindingProvider;
          new (): CampaignBindingProvider;
      }
  
      /////////////////////////////////
      // selectExtensions.js
      /////////////////////////////////
  
      selectExtensions: {
  
          readValue(element: HTMLElement): any;
  
          writeValue(element: HTMLElement, value: any): void;
      };
  
      components: CampaignComponents;
  
      /////////////////////////////////
      // options.js
      /////////////////////////////////
  
      options: {
          deferUpdates: boolean,
  
          useOnlyNativeEvents: boolean
      };
  
      /////////////////////////////////
      // tasks.js
      /////////////////////////////////
  
      tasks: CampaignTasks;
  }
  
  interface CampaignBindingProvider {
      nodeHasBindings(node: Node): boolean;
      getBindings(node: Node, bindingContext: CampaignBindingContext): {};
      getBindingAccessors?(node: Node, bindingContext: CampaignBindingContext): { [key: string]: string; };
  }
  
  interface CampaignComputedContext {
      getDependenciesCount(): number;
      isInitial: () => boolean;
      isSleeping: boolean;
  }
  
  //
  // refactored types into a namespace to reduce global pollution
  // and used Union Types to simplify overloads (requires TypeScript 1.4)
  //
  declare namespace CampaignComponentTypes {
  
      interface Config {
          viewModel?: ViewModelFunction | ViewModelSharedInstance | ViewModelFactoryFunction | AMDModule;
          template: string | Node[]| DocumentFragment | TemplateElement | AMDModule;
          synchronous?: boolean;
      }
  
      interface ComponentConfig {
          viewModel?: ViewModelFunction | ViewModelSharedInstance | ViewModelFactoryFunction | AMDModule;
          template: any;
          createViewModel?: any;
      }
  
      interface EmptyConfig {
      }
  
      // common AMD type
      interface AMDModule {
          require: string;
      }
  
      // viewmodel types
      interface ViewModelFunction {
          (params?: any): any;
      }
  
      interface ViewModelSharedInstance {
          instance: any;
      }
  
      interface ViewModelFactoryFunction {
          createViewModel: (params?: any, componentInfo?: ComponentInfo) => any;
      }
  
      interface ComponentInfo {
          element: Node;
          templateNodes: Node[];
      }
  
      interface TemplateElement {
          element: string | Node;
      }
  
      interface Loader {
          getConfig? (componentName: string, callback: (result: ComponentConfig) => void): void;
          loadComponent? (componentName: string, config: ComponentConfig, callback: (result: Definition) => void): void;
          loadTemplate? (componentName: string, templateConfig: any, callback: (result: Node[]) => void): void;
          loadViewModel? (componentName: string, viewModelConfig: any, callback: (result: any) => void): void;
          suppressLoaderExceptions?: boolean;
      }
  
      interface Definition {
          template: Node[];
          createViewModel? (params: any, options: { element: Node; }): any;
      }
  }
  
  interface CampaignComponents {
      // overloads for register method:
      register(componentName: string, config: CampaignComponentTypes.Config | CampaignComponentTypes.EmptyConfig): void;
  
      isRegistered(componentName: string): boolean;
      unregister(componentName: string): void;
      get(componentName: string, callback: (definition: CampaignComponentTypes.Definition) => void): void;
      clearCachedDefinition(componentName: string): void
      defaultLoader: CampaignComponentTypes.Loader;
      loaders: CampaignComponentTypes.Loader[];
      getComponentNameForNode(node: Node): string;
  }
  
  declare var Campaign: CampaignStatic;
  
  declare module "Campaign" {
      export = Campaign;
  }