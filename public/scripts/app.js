'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$component) {
	_inherits(IndecisionApp, _React$component);

	function IndecisionApp(props) {
		_classCallCheck(this, IndecisionApp);

		var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

		_this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
		_this.handlePick = _this.handlePick.bind(_this);
		_this.handleAddOption = _this.handleAddOption.bind(_this);
		_this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
		_this.state = {
			options: []
			//options: props.options omit for the exercise saving localstorage count
			//options: []	
		};
		return _this;
	}
	//lifecycle method use in classes not in stateless, 


	_createClass(IndecisionApp, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			try {
				var json = localStorage.getItem('options');
				var options = JSON.parse(json);
				//if statement are options show
				if (options) {
					this.setState(function () {
						return { option: option };
					});
				}
			} catch (e) {
				//Do nothing at all
			}
		}
		//another lifecycle method component did update is when you change something in the live server or add something

	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			//if statement when value diffrent than 0 update
			if (prevState.options.length !== this.state.optionslength) {
				var json = JSON.stringify(this.state.options);
				localStorage.setItem('options', json);
				//console.log('saving data');
			}
		}
		//another liefcycle method componentwillunmount it shows before goes away, rarely used

	}, {
		key: 'componentWillUnmount',
		value: function (_componentWillUnmount) {
			function componentWillUnmount() {
				return _componentWillUnmount.apply(this, arguments);
			}

			componentWillUnmount.toString = function () {
				return _componentWillUnmount.toString();
			};

			return componentWillUnmount;
		}(function () {
			console.log(componentWillUnmount);
		})

		//expression above long 5 lines of code

	}, {
		key: 'handleDeleteOptions',
		value: function handleDeleteOptions() {
			/*	this.setState(() => {
   		return {
   		options: []
   		},
   	});*/
			//this is the same as 
			this.setState(function () {
				return { options: [] };
			});
			/*
   	this.setState(() =>({
   		options: []
   	}));
   */
		}

		////removing individual options

	}, {
		key: 'handleDeleteOption',
		value: function handleDeleteOption(optionToRemove) {
			this.setState(function (prevState) {
				return {
					options: prevState.options.filter(function (option) {
						return optionToRemove !== option;
					})
				};
			});
		}
		//arrow function is shorter than the expression above
		//const num = () => {}//function body this will be undefined
		//const num = () => ({}) //return an object 

	}, {
		key: 'handlePick',
		value: function handlePick() {
			var randomNum = Math.floor(Math.random() * this.state.app.options.length);
			var option = this.state.app.options[randomNum];
			alert(option);
		}
	}, {
		key: 'handleAddOption',
		value: function handleAddOption(option) {
			//if there is a empty string show
			if (!option) {
				return 'Enter valid value to add item';
			} else if (this.state.options.indexOf(option) > -1) {
				return 'This otion already exists';
			} //else clause short version
			this.setState(function (prevState) {
				return { options: prevState.options.concat(option) };
			});
			//comment long version
			/*this.setState((prevState) => {
   	return{
   	//concat to add two array 
   	options: prevState.options.concat(option)
   	}; 			
   });*/
		}
	}, {
		key: 'render',
		value: function render() {
			var title = 'Indecision';
			var subtitle = 'Put your life in the hands of a computer';

			return React.createElement(
				'div',
				null,
				'//to use attribute we call props in react',
				React.createElement(Header, { title: title, subtitle: subtitle }),
				React.createElement(Action, {
					hasOptions: this.state.options.legth > 0,
					handlePick: this.handlePick
				}),
				React.createElement(Options, {
					options: this.state.options,
					handleDeleteOptions: this.handleDeleteOptions,
					handleDeleteOption: this.handleDeleteOption
				}),
				React.createElement(AddOption, {
					handleAddOption: this.handleAddOption
				})
			);
		}
	}]);

	return IndecisionApp;
}(React.component);

//default indecision app, you go where is options in this indecision class
//omit for the exercise in saving localstorage count
//IndecisionApp.defaultProps = {
//	options: []
//};

//stateless component header


var Header = function Header(props) {
	return React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			props.title
		),
		React.createElement(
			'h2',
			null,
			props.subtitle
		)
	);
};

//default prop this is used if we take out the title in render from indecisionapp class
Header.defaultProps = {
	title: 'some default'
};

/*class Header extends React.Component {
	render(){
		//it will show in console header attribute indecision.
		//console.log(this.props);
		return (	
		//return <p>This is from Header</p>;
			<div>	
				<h1>{this.props.title}</h1>
				//<h1>Indecision</h1>
				//<h2>Put your life in the hands of a computer</h2>
				<h2>{this.props.subtitle}</h2>
			</div>
		);
	}
}
*/

//stateless functional component action
//steps: make a const ... then, take out this since no longer needed, because you already have props integrated
var Action = function Action(props) {
	return React.createElement(
		'div',
		null,
		React.createElement(
			'button',
			{ onClick: props.handlePick,
				disabled: !props.hasOptions
			},
			'What should I do?'
		)
	);
};

/*class Action extends React.Component {
	
	render(){
		return (
			<div>
				<button onClick={this.props.handlePick}
				disabled={!this.props.hasOptions}
				>
				What should I do?
				</button>
			</div>
		);
	}
}
*/

//Challenge
//Add Remove all button
//Setup handleRemoveAll -> alert some changes
//setup onClick to fire the method

//Setup options prop for options component
//Render the length of the array

//render new p tag each option (set text, set key)

//Challenge
//Options -> Options component here

//stateless component options
var Options = function Options(props) {
	return React.createElement(
		'div',
		null,
		React.createElement(
			'button',
			{ onClick: props.handleDeleteOptions },
			'RemoveAll'
		),
		props.options.length === 0 && React.createElement(
			'p',
			null,
			'Please add an option to get started!'
		),
		props.options.map(function (option) {
			return React.createElement(Option, { key: option, optionText: option, handleDeleteOption: props.handleDeleteOption });
		})
	);
};

//comment
/*
class Options extends React.component {
	constructor(props){
	//we need to call super to get the values previous
	super(props);
	this.handleRemoveAll = this.handleRemoveAll.bind(this);
	}

	handleRemoveAll (){
		//when we call the console.log below we get an error that is null since we lost the props in order to get it we need to declare a const at the beginning of the script and call it
		console.log(this.props.options);
		//alert('handleRemoveAll');
	}
	render() {
		return (
			<div>
			<button onClick={this.props.handleDeleteOptions}>RemoveAll</button>
			//array that is why we use length
			//{this.props.options.length}
			//map
			{this.props.options.map((option) => <Option key= {option} optionText={option}> </>)}
			</div>
		);
	}
}
*/

//challenge
//setup form with the text input and submit button
//wire up onSubmit
//handleAddOption -> fetch the value typed -> if value, then alert


//AddOption -> AddOption component here 

var AddOption = function (_React$Component) {
	_inherits(AddOption, _React$Component);

	//when using this far down we need to make a constructor
	function AddOption(props) {
		_classCallCheck(this, AddOption);

		var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

		_this2.handleAddOption = _this2.handleAddOption.bind(_this2);
		return _this2;
	}

	_createClass(AddOption, [{
		key: 'handleAddOption',
		value: function handleAddOption(e) {
			//prevent the default refresh browser
			e.preventDefault();
			//add trim at the end to prevent enter space in the form
			var option = e.target.elements.option.value.trim;
			var error = this.props.handleAddOption(option);

			this.setState(function () {
				return { error: error };
			});

			if (!error) {
				e.target.elements.value = ''; //input when introducing data gets clear empty
			}
			/*this.setState(() => {
   	return {error};
   });*/
			//if (option) {
			//	this.props.handleAddOption(option);
			//}
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'form',
					null,
					React.createElement('input', { type: 'text', name: 'option' }),
					React.createElement(
						'button',
						null,
						'Add Option'
					)
				),
				'//AddOption component here //Options:',
				this.props.optionText,
				'//note ',
				React.createElement(Option, null),
				' = ',
				React.createElement(Option, null),
				', we need to add this so be inject insde after options nest component //',
				React.createElement(Option, null)
			);
		}
	}]);

	return AddOption;
}(React.Component);

//stateless functional component option


var Option = function Option() {
	return React.createElement(
		'div',
		null,
		undefined.props.optionText,
		React.createElement(
			'button',
			{
				onClick: function onClick(e) {
					props.handleDeleteOption(props.optionText);
				}
			},
			'remove'
		)
	);
};

//comment below
/*
class Option extends React.component {
	render(){
		return (
			<div>
			{this.props.optionText}
			</div>		
		);
	}
}
*/

//stateless component
var User = function User(props) {
	return React.createElement(
		'div',
		null,
		React.createElement(
			'p',
			null,
			'Name: ',
			props.name
		),
		React.createElement(
			'p',
			null,
			'Age: ',
			props.age
		)
	);
};

// nesting indecision app, we change indecision to stateless component user
//ReactDOM. render(<IndecisionApp />, document.getElementById('app'));
//default props in options
ReactDOM.render(React.createElement(IndecisionApp, { options: ['Devils den', 'Second District'] }), document.getElementById('app'));
