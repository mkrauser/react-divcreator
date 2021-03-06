import React, { Component } from 'react';

import { inputlistswitchKeys } from '../../store/inputlistswitch';

import { storeKeys } from '../../store/reducer';

import { InputListSwitch } from '../../../module/build/react-divcreator';

import { BoxBoxes, customKey, Sourcecode, List, BoxMenu, ButtonsNavigation } from '../../../module/build/react-divcreator';

import { HeaderComponent } from '../../modules/headerComponent';

import { LeftMenu } from '../../modules/leftMenu';

import { copyToClipBoard } from '../../functions/copyToClipboard';

import { copyToClipboardText } from '../../data/copy-to-clipboard';

import {  getKeyFromDescription } from '../../functions/getKeyFromDescription';

import { FooterComponents } from '../../modules/footerComponents';

import { markSpecialWords } from '../../data/mark-special-words';

class InputListSwitchWebsite extends Component {

    constructor(props) {
        super(props);
        this.generateCodeExamples = this.generateCodeExamples.bind(this);
        this.deleteFromStack = this.deleteFromStack.bind(this);
        this.alertEntry = this.alertEntry.bind(this);
        this.switchClicked = this.switchClicked.bind(this);
        
        this.state = {
            addedByUser: [],
            filtered: [],
            entrys: ["Germany", "USA", "China", "Poland", "France"],
            backupEntrys: ["Germany", "USA", "China", "Poland", "France"],
            currentMode: 'add',
            currentInputValue: '',
            placeholder: '',
            currentModeTitle: 'Mode: add',
            isChecked: false,
            errorMessages: [],
            successMessages: [],
            warningMessages: []
        }

        this.subTitle = '';
        this.examples = [];
        this.keys = [];
    }

    /**
     * Delete single entry from list
     * @param {any} event Click event
     * @param {string} entry Entrys value passed to the module
     * @param {number} index Current arrays entry index
     * @param {object} action Whole action passed for this entry to the module
     * @param {string} keyPressed Key pressed by the user: Click, keyPress, Esc, Enter
     * @param {string} currentMode Current mode: add, search
     * @param {string} currentModeTitle Defined by the user
     * @param {boolean} isChecked Swichers state
     * @param {string} placeholder Current setted placeholder
     */
    deleteFromStack(event, entry, index, action, keyPressed, currentMode, currentModeTitle, isChecked, placeholder, customData) {
        console.clear();
        console.info( 
            event,  
            entry, 
            keyPressed, 
            currentMode, 
            currentModeTitle, 
            isChecked, 
            placeholder, 
            customData
        );

        if ('search' == currentMode) {
            const mergedEntrys = [...this.state.backupEntrys, ...this.state.addedByUser];

            return this.setState({
                errorMessages: ['Item cannot be deleted in the search mode'],
                backupEntrys: mergedEntrys,
                currentInputValue: '',
                // Have to add this, to keep the state "alive" 
                // with the current changes
                isChecked,
                currentMode,
                currentModeTitle,
                warningMessages: [],
                successMessages: []
            });
        }
        let entrys = [...this.state.entrys, ...this.state.addedByUser];
        const newOrder = entrys.filter((entry, i) => i !== index);

        this.setState({
            entrys: newOrder,
            backupEntrys: newOrder,
            errorMessages: [],
            successMessages: [],
            warningMessages: [ entry + ' has been deleted'],
            // Have to add this, to keep the state "alive" 
            // with the current changes
            isChecked,
            currentMode,
            currentModeTitle
        });
    }

    /**
     * Custom function to danlge ENTER or ICON CLICK
     * if the user is in add mode
     * @param {any} event 
     * @param {string} value 
     */
    addToDatabase(event, currentInputValue, keyPressed, currentMode, currentModeTitle, isChecked, placeholder, customData){
        // Add element to database
        console.clear();
        console.info( 
            event, 
            currentInputValue, 
            keyPressed, 
            currentMode, 
            currentModeTitle, 
            isChecked, 
            placeholder, 
            customData
        );
    }
    /**
     * Alert some message to the UI
     * @param {any} event Click event
     * @param {string} entry Entrys value passed to the module
     * @param {number} index Current arrays entry index
     * @param {object} action Whole action passed for this entry to the module
     * @param {string} keyPressed Key pressed by the user: Click, keyPress, Esc, Enter
     * @param {string} currentMode Current mode: add, search
     * @param {string} currentModeTitle Defined by the user
     * @param {boolean} isChecked Swichers state
     * @param {string} placeholder Current setted placeholder
     */
    alertEntry(event, entry, index, action, keyPressed, currentMode, currentModeTitle, isChecked, placeholder, customData) {
        console.clear();
        console.info( 
            event, 
            entry, 
            index, 
            action, 
            keyPressed, 
            currentMode, 
            currentModeTitle, 
            isChecked, 
            placeholder, 
            customData
        );

        const allEntrys = [...this.state.backupEntrys, ...this.state.entrys];

        alert(`
            User pressed the key: ${keyPressed}. 

            User are in the mode: ${currentMode}. 
            
            User clicked on value: ${allEntrys[index]},
            
            User is on the arrays index: ${index}
        `);
    }

    /**
     * Handle data if user clicked the switch button
     * @param {string} currentMode Current mode: add, search
     * @param {string} currentModeTitle Defined by the user
     * @param {boolean} isChecked Swichers state
     * @param {string} placeholder Current setted placeholder
     */
    switchClicked(currentMode,currentModeTitle,isChecked,placeholder, customData){
        console.info(
            currentMode,
            currentModeTitle,
            isChecked,
            placeholder, 
            customData
        );
    }

    /**
     * dispatch dtata to the redux store
     */
    dispatchData() {
        storeKeys.dispatch({
            type: 'keys',
            keys: inputlistswitchKeys
        });
    }
    /**
     * Return modules data
     */
    moduleData() {
        return {
            subTitle: 'InputListSwitch',
            keys: storeKeys.getState(),
            examples: [
                {
                    class: 'inputlistswitch-example-1',
                    description: 'Example with onClick handler (setted for the search icon) and input handler (ESC/ Enter) and mode switcher to add or search for items in current available list.',
                    html: (
                        <InputListSwitch
                            class="custom-inputlistswitch"
                            id=""
                            data={this.state.entrys}
                            showLineNumber={true}
                            // Mode: add
                            addInput={true}
                            placeholder={'Type to add an element to the current list'}
                            icon={(<i className="fab fa-searchengin"></i>)}
                            valueOfInputField={this.state.currentInputValue}
                            messageAdded={'Added element to the current list !'}
                            emptyOnEnter={true}
                            emptyOnClick={true}
                            emptyOnEsc={true}
                            // Mode: search
                            switchers={true}
                            switchCallback={this.switchClicked}
                            currentMode={this.state.currentMode}
                            isChecked={this.state.isChecked}
                            modeTitleAdd={'You are currently in the mode: ADD'}
                            modeTitleSearch={'You are currently in the mode: SEARCH'}
                            placeholderSearch={'Type to search for item in current list'}
                            noEntrysMsg={("")}
                            errorMessages={this.state.errorMessages}
                            successMessages={this.state.successMessages}
                            warningMessages={this.state.warningMessages}
                            customData={"my custom data"}
                            performance={true}
                            searchKeySensitive={false}
                            responsive={true}
                            responsiveTitle={
                                <span>
                                    <i className="fas fa-table"></i>
                                    Table title
                                </span>
                            }
                            header={
                                [
                                    'ID',
                                    'Value',
                                    'Delete item',
                                    'Show item'
                                ]
                            }
                            actions={
                                [
                                    {
                                        actionTitle: "Delete single entry",
                                        actionFunction: this.deleteFromStack,
                                        actionData: (<i className="fas fa-dumpster"></i>)
                                    },
                                    {
                                        actionTitle: "Read single entry",
                                        actionName: "Open Entry",
                                        actionFunction: this.alertEntry,
                                        actionData: (<i className="fas fa-book-open"></i>)
                                    }
                                ]
                            }
                        />
                    ),
                    cssCode: (
`.custom-inputlistswitch{
    max-width: 1024px;
    margin:0 auto;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    .react-divcreator-inputlistswitch-header-ul{
        background-color:dodgerblue;
    }
    .react-divcreator-inputlistswitch-header-ul-li{
        p{
            font-size:18px;
            color:rgb(255,255,255);
        }
        p,i{
            text-align:left;
        }
    }
    
    .react-divcreator-inputlistswitch-ul-li{
        .react-divcreator-inputlistswitch-ul-li__span{
            display: block;
            text-align:center;

            i{
                color:rgb(144,144,144);
                font-size:18px;
            }
        }
        .react-divcreator-inputlistswitch-ul-li__span:hover{
            cursor: pointer;

            i{
                color:dodgerblue;
            }
            .fa-dumpster{
                color:#F44559;
            }
        }

        p{
            font-size:18px;
            color:rgba(69,69,69,.5)
        }
    }
    .react-divcreator-inputlistswitch-ul__odd{
        background:rgba(69,69,69,.05);
    }
    .react-divcreator-inputlistswitch-ul__even{
        background:rgba(69,69,69,.1);
    }
    .react-divcreator-inputlistswitch-ul__odd:hover,
    .react-divcreator-inputlistswitch-ul__even:hover {
        background:rgba(69,69,69,.2);
    }
    .react-divcreator-inputlistswitch-ul:last-of-type{
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }

    .react-divcreator-inputlistswitch-switch{
        input:checked+.react-divcreator-inputlistswitch-switch-slider {
            background-color: rgba(26, 182, 157, .8);
        }
    }
    .react-divcreator-inputlistswitch-switch-description{
        color:rgba(69,69,69,.6);
        font-size:18px;
    }
    .responsive-li-title{
        i, span{
            color:rgb(255,255,255);
            font-size:1.4rem;
            margin:0 10px 0 0;
        }
    }
}`
                    ),
                    reactCode: (
`import { InputListSwitch } from 'react-divcreator';

<InputListSwitch
    class="custom-inputlistswitch"
    id=""
    data={this.state.entrys}
    showLineNumber={true}
    // Mode: add
    addInput={true}
    placeholder={'Type to add an element to the current list'}
    icon={(<i className="fab fa-searchengin"></i>)}
    valueOfInputField={this.state.currentInputValue}
    messageAdded={'Added element to the current list !'}
    emptyOnEnter={true}
    emptyOnClick={true}
    emptyOnEsc={true}
    // Mode: search
    switchers={true}
    switchCallback={this.switchClicked}
    currentMode={this.state.currentMode}
    isChecked={this.state.isChecked}
    modeTitleAdd={'You are currently in the mode: ADD'}
    modeTitleSearch={'You are currently in the mode: SEARCH'}
    placeholderSearch={'Type to search for item in current list'}
    noEntrysMsg={("")}
    errorMessages={this.state.errorMessages}
    successMessages={this.state.successMessages}
    warningMessages={this.state.warningMessages}
    customData={"my custom data"}
    performance={true}
    searchKeySensitive={false}
    responsive={true}
    responsiveTitle={
        <span>
            <i className="fas fa-table"></i>
            Table title
        </span>
    }
    header={
        [
            'ID',
            'Value',
            'Delete item',
            'Show item'
        ]
    }
    actions={
        [
            {
                actionTitle: "Delete single entry",
                actionFunction: this.deleteFromStack,
                actionData: (<i className="fas fa-dumpster"></i>)
            },
            {
                actionTitle: "Read single entry",
                actionName: "Open Entry",
                actionFunction: this.alertEntry,
                actionData: (<i className="fas fa-book-open"></i>)
            }
        ]
    }
/>`
                    ),
                    jsCode: (
`constructor(props) {
    super(props);
    this.generateCodeExamples = this.generateCodeExamples.bind(this);
    this.deleteFromStack = this.deleteFromStack.bind(this);
    this.alertEntry = this.alertEntry.bind(this);
    this.switchClicked = this.switchClicked.bind(this);
    
    this.state = {
        addedByUser: [],
        filtered: [],
        entrys: ["Germany", "USA", "China", "Poland", "France"],
        backupEntrys: ["Germany", "USA", "China", "Poland", "France"],
        currentMode: 'add',
        currentInputValue: '',
        placeholder: '',
        currentModeTitle: 'Mode: add',
        isChecked: false,
        errorMessages: [],
        successMessages: [],
        warningMessages: []
    }
}

/**
 * Delete single entry from list
 * @param {any} event Click event
 * @param {string} entry Entrys value passed to the module
 * @param {number} index Current arrays entry index
 * @param {object} action Whole action passed for this entry to the module
 * @param {string} keyPressed Key pressed by the user: Click, keyPress, Esc, Enter
 * @param {string} currentMode Current mode: add, search
 * @param {string} currentModeTitle Defined by the user
 * @param {boolean} isChecked Swichers state
 * @param {string} placeholder Current setted placeholder
 */
deleteFromStack(event, entry, index, action, keyPressed, currentMode, currentModeTitle, isChecked, placeholder, customData) {
    console.clear();
    console.info( 
        event,  
        entry, 
        keyPressed, 
        currentMode, 
        currentModeTitle, 
        isChecked, 
        placeholder, 
        customData
    );

    if ('search' == currentMode) {
        const mergedEntrys = [...this.state.backupEntrys, ...this.state.addedByUser];

        return this.setState({
            errorMessages: ['Item cannot be deleted in the search mode'],
            backupEntrys: mergedEntrys,
            currentInputValue: '',
            // Have to add this, to keep the state "alive" 
            // with the current changes
            isChecked,
            currentMode,
            currentModeTitle,
            placeholder,
            warningMessages: [],
            successMessages: []
        });
    }
    let entrys = [...this.state.entrys, ...this.state.addedByUser];
    const newOrder = entrys.filter((entry, i) => i !== index);

    this.setState({
        entrys: newOrder,
        backupEntrys: newOrder,
        errorMessages: [],
        successMessages: [],
        warningMessages: [ entry + ' has been deleted'],
        // Have to add this, to keep the state "alive" 
        // with the current changes
        isChecked,
        currentMode,
        currentModeTitle
    });
}

/**
 * Custom function to danlge ENTER or ICON CLICK
 * if the user is in add mode
 * @param {any} event 
 * @param {string} value 
 */
addToDatabase(event, currentInputValue, keyPressed, currentMode, currentModeTitle, isChecked, placeholder, customData){
    // Add element to database
    console.clear();
    console.info( 
        event, 
        currentInputValue, 
        keyPressed, 
        currentMode, 
        currentModeTitle, 
        isChecked, 
        placeholder, 
        customData
    );
}
/**
 * Alert some message to the UI
 * @param {any} event Click event
 * @param {string} entry Entrys value passed to the module
 * @param {number} index Current arrays entry index
 * @param {object} action Whole action passed for this entry to the module
 * @param {string} keyPressed Key pressed by the user: Click, keyPress, Esc, Enter
 * @param {string} currentMode Current mode: add, search
 * @param {string} currentModeTitle Defined by the user
 * @param {boolean} isChecked Swichers state
 * @param {string} placeholder Current setted placeholder
 */
alertEntry(event, entry, index, action, keyPressed, currentMode, currentModeTitle, isChecked, placeholder, customData) {
    console.clear();
    console.info( 
        event, 
        entry, 
        index, 
        action, 
        keyPressed, 
        currentMode, 
        currentModeTitle, 
        isChecked, 
        placeholder, 
        customData
    );

    const allEntrys = [...this.state.backupEntrys, ...this.state.entrys];

    alert(\`
        User pressed the key: \${keyPressed}. 

        User are in the mode: \${currentMode}. 
        
        User clicked on value: \${allEntrys[index]},
        
        User is on the arrays index: \${index}
    \`);
}

/**
 * Handle data if user clicked the switch button
 * @param {string} currentMode Current mode: add, search
 * @param {string} currentModeTitle Defined by the user
 * @param {boolean} isChecked Swichers state
 * @param {string} placeholder Current setted placeholder
 */
switchClicked(currentMode,currentModeTitle,isChecked,placeholder, customData){
    console.info(
        currentMode,
        currentModeTitle,
        isChecked,
        placeholder, 
        customData
    );
}`
                    )
                }
            ]
        };
    }

    generateSubTitle() {

        if (this.subTitle) {

            return (
                <h1 className='context-of-code-subtitle'>
                    {
                        this.subTitle
                    }
                </h1>
            );
        }

        return null;
    }

    generateCodeExamples() {
        let cls = '';
        this.uuids = [];

        if (1 <= this.examples.length) {
            return this.examples.map((example, counter) => {
                
                counter += 1;
                cls = `divcreator-sourcecode-example ${example.class}`;
                let uuid = `uuid-${customKey()}--${customKey()}`;
                this.uuids.push(uuid);

                return (
                    <div id={uuid} key={customKey()} className={cls}>
                        {
                            example.html && 
                            <BoxBoxes
                                class="boxes"
                                border={true}
                                // Responsive keys
                                responsive={true}
                                responsiveX={1024}
                                // Animation config
                                // animation={true}
                                // animationTime={500}
                                // animationTimeAdder={100}
                                // mount || scroll
                                animationOn={'mount'}
                                // how many elements should be in 1 single row
                                leftBreak={1}
                                leftData={
                                    [
                                        {
                                            top: {
                                                title: (
                                                    <span>
                                                        <div className="box-text-icon">
                                                            <i className="fas fa-laptop-code"></i>
                                                            <h1>HTML example {counter}</h1>
                                                        </div>
                                                    </span>
                                                )
                                            },
                                            content: (
                                                <span className="box-content">
                                                    {
                                                        example.description &&
                                                        <p className='divcreator-sourcecode-example-p'>
                                                            {
                                                                example.description
                                                            }
                                                        </p>
                                                    }
                                                    <div className="box-content--div">
                                                        {
                                                            example.html
                                                        }
                                                    </div>
                                                </span>
                                            )
                                        }
                                    ]
                                }
                            />
                        }
                        {
                            example.reactCode && example.reactCode.length &&
                            <BoxBoxes
                                class="boxes"
                                border={true}
                                // Responsive keys
                                responsive={true}
                                responsiveX={1024}
                                // Animation config
                                // animation={true}
                                // animationTime={500}
                                // animationTimeAdder={100}
                                // mount || scroll
                                animationOn={'mount'}
                                // how many elements should be in 1 single row
                                leftBreak={1}
                                leftData={
                                    [
                                        {
                                            top: {
                                                title: (
                                                    <span>
                                                        <div className="box-text-icon">
                                                            <i className="fas fa-laptop-code"></i>
                                                            <h1>React code for example {counter}</h1>
                                                        </div>
                                                    </span>
                                                )
                                            },
                                            content: (
                                                <span className="box-content">
                                                    <div className="box-content--div">
                                                        <div className="box-content--div">
                                                            <Sourcecode
                                                                class='divcreator-sourcecode-background divcreator-sourcecode-code divcreator-sourcecode-background-react divcreator-sourcecode-original-code'
                                                                showLines={true}
                                                                match={markSpecialWords}
                                                                data={example.reactCode}
                                                            />
                                                            {
                                                                document.queryCommandSupported &&
                                                                <span className="copy-to-clipboard-holder">
                                                                    <span
                                                                        title="Copy to clipboard"
                                                                        className="copy-to-clipboard"
                                                                        onClick={(e) => copyToClipBoard(e, example.reactCode, document.documentElement.scrollTop)}
                                                                    >
                                                                        {
                                                                            `${copyToClipboardText()} example`
                                                                        }
                                                                        <i className="far fa-copy"></i>
                                                                    </span>
                                                                </span>
                                                            }
                                                        </div>
                                                    </div>
                                                </span>
                                            )
                                        }
                                    ]
                                }
                            />
                        }
                        {
                            example.jsCode && example.jsCode.length &&
                            <BoxBoxes
                                class="boxes"
                                border={true}
                                // Responsive keys
                                responsive={true}
                                responsiveX={1024}
                                // Animation config
                                // animation={true}
                                // animationTime={500}
                                // animationTimeAdder={100}
                                // mount || scroll
                                animationOn={'mount'}
                                // how many elements should be in 1 single row
                                leftBreak={1}
                                leftData={
                                    [
                                        {
                                            top: {
                                                title: (
                                                    <span>
                                                        <div className="box-text-icon">
                                                            <i className="fas fa-laptop-code"></i>
                                                            <h1>Javascript code for example {counter}</h1>
                                                        </div>
                                                    </span>
                                                )
                                            },
                                            content: (
                                                <span className="box-content">
                                                    <div className="box-content--div">
                                                        <div className="box-content--div">
                                                            <Sourcecode
                                                                class='divcreator-sourcecode-background divcreator-sourcecode-code divcreator-sourcecode-background-js divcreator-sourcecode-original-code'
                                                                tabSpaces={0}
                                                                showLines={true}
                                                                match={markSpecialWords}
                                                                data={example.jsCode}
                                                            />
                                                            {
                                                                document.queryCommandSupported &&
                                                                <span className="copy-to-clipboard-holder">
                                                                    <span
                                                                        title="Copy to clipboard"
                                                                        className="copy-to-clipboard"
                                                                        onClick={(e) => copyToClipBoard(e, example.jsCode, document.documentElement.scrollTop)}
                                                                    >
                                                                        {
                                                                            `${copyToClipboardText()} example`
                                                                        }
                                                                        <i className="far fa-copy"></i>
                                                                    </span>
                                                                </span>
                                                            }
                                                        </div>
                                                    </div>
                                                </span>
                                            )
                                        }
                                    ]
                                }
                            />
                        }
                        {
                            example.cssCode && example.cssCode.length &&
                            <BoxBoxes
                                class="boxes"
                                border={true}
                                // Responsive keys
                                responsive={true}
                                responsiveX={1024}
                                // Animation config
                                // animation={false}
                                // animationTime={500}
                                // animationTimeAdder={100}
                                // mount || scroll
                                animationOn={'mount'}
                                // how many elements should be in 1 single row
                                leftBreak={1}
                                leftData={
                                    [
                                        {
                                            top: {
                                                title: (
                                                    <span>
                                                        <div className="box-text-icon">
                                                            <i className="fas fa-laptop-code"></i>
                                                            <h1>SCSS code for example {counter}</h1>
                                                        </div>
                                                    </span>
                                                )
                                            },
                                            content: (
                                                <span className="box-content">
                                                    <div className="box-content--div">
                                                        <div className="box-content--div">
                                                            <Sourcecode
                                                                class='divcreator-sourcecode-background divcreator-sourcecode-code divcreator-sourcecode-background-js divcreator-sourcecode-original-code'
                                                                tabSpaces={0}
                                                                showLines={true}
                                                                match={markSpecialWords}
                                                                data={example.cssCode}
                                                            />
                                                            {
                                                                document.queryCommandSupported &&
                                                                <span className="copy-to-clipboard-holder">
                                                                    <span
                                                                        title="Copy to clipboard"
                                                                        className="copy-to-clipboard"
                                                                        onClick={(e) => copyToClipBoard(e, example.cssCode, document.documentElement.scrollTop)}
                                                                    >
                                                                        {
                                                                            `${copyToClipboardText()} example`
                                                                        }
                                                                        <i className="far fa-copy"></i>
                                                                    </span>
                                                                </span>
                                                            }
                                                        </div>
                                                    </div>
                                                </span>
                                            )
                                        }
                                    ]
                                }
                            />
                        }
                    </div>
                )
            })
        }

        return null;
    }

    generateMainDescription() {
        if (this.mainDescription) {

            return (
                <h1 className='context-of-code-main-description'>
                    {
                        this.mainDescription
                    }
                </h1>
            );
        }
        return null;
    }
    
    generateKeysDescription() {

        if (1 <= this.keys.length) {
            const keys = [];

            for (let x = 0; x <= this.keys.length - 1; x++) {
                const key = this.keys[x].type ? this.keys[x].type : getKeyFromDescription(this.keys[x].description, 'type');

                keys.push({
                    values: [
                        {
                            value: this.keys[x].key ? this.keys[x].key : ''
                        },
                        {
                            value: key
                        },
                        {
                            value: this.keys[x].description ? getKeyFromDescription(this.keys[x].description, 'description') : ''
                        }
                    ]
                });
            }
            
            return <List
                class="keys-for-type"
                id=""
                data={keys}
                responsive={true}
                responsiveX={1024}
                title={
                    <span>
                        <i className="fas fa-table"></i>
                        Available keys
                    </span>
                }
                header={
                    [
                        'Name',
                        'Type',
                        'Description'
                    ]
                }
            />
        }

        return null;
    }

    generateNavigationExamples() {
        const data = [];

        if (this.uuids.length) {
            this.uuids.map((id, index) => {
                data.push(
                    {
                        boxData: (
                            <ButtonsNavigation
                                navigationTo={`#${id}`}
                                navigationTime={300}
                                html={(
                                    <span>
                                        {
                                            `example ${index + 1}`
                                        }
                                    </span>
                                )}
                            />
                        ),
                        attributes: {
                            title: `Navigate to the code example: ${index + 1}`
                        }
                    }
                );
            })
        }
        return data;
    }

    render() {
        this.dispatchData();
        const moduleData = this.moduleData();
        this.subTitle = (moduleData && moduleData.subTitle) ? moduleData.subTitle : '';
        this.examples = (moduleData && moduleData.examples) ? moduleData.examples : [];
        this.keys = (moduleData && moduleData.keys) ? moduleData.keys : [];
        this.mainDescription = (moduleData && moduleData.mainDescription) ? moduleData.mainDescription : '';

        const subTitle = this.generateSubTitle();
        const codes = this.generateCodeExamples();
        const keys = this.generateKeysDescription();
        const mainDescription = this.generateMainDescription();

        return (
            <div className="website--components">
                <div className="content">
                    <LeftMenu />
                    <div className="right-site">
                        <HeaderComponent />
                        {
                            subTitle && subTitle
                        }
                        {
                            mainDescription && mainDescription
                        }
                        {
                            codes && codes
                        }
                        {
                            keys &&
                            <h1 className='title-minimum'>
                                Available keys
                            </h1>
                        }
                        {
                            keys &&
                            <div className="keys-component">
                                {
                                    keys
                                }
                            </div>
                        }
                        <FooterComponents
                            currentItem={this.subTitle}
                        />
                    </div>
                </div>
                <BoxMenu
                    class="boxes-menu-navigator"
                    performance={true}
                    width={50}
                    height={40}
                    borderWidth={1}
                    backgroundColorRoot={'rgba(24,115,204,1)'}
                    openData={<i className="fas fa-ellipsis-h"></i>}
                    closeData={<i className="fas fa-times"></i>}
                    directionX={false}
                    directionY={'bottom'}
                    alignBoxes={'y'}
                    data={this.generateNavigationExamples()}
                />
                <form style={{ display: 'none !important', opacity: 0, position: 'absolute', zIndex: '-1' }}>
                    <textarea
                        id="copy-to-clipboard"
                        value=''
                        readOnly={true}
                    />
                </form>
            </div>
        );
    }
};
export default InputListSwitchWebsite;
