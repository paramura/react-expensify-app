import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount/100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            focus:false,
            error:''
        }
    }

    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(()=> ({ description: description}))
    }

    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(()=>({
            note: note
        }))
    }
     
    onAmountChange = (e) =>{
        const amount = e.target.value
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
        this.setState(()=>({
            amount: amount
        }))}
    }

    onDateChange = (createdAt) =>{
        if(createdAt){
        this.setState(()=>({createdAt}))
        }
    }

    onFocusChange = ({focused})=> {
        this.setState(()=>({focused: focused}))
    }

    onSubmit=(e)=>{
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            this.setState(()=>({
                error: "The description and amount can't be empty"
            }))
        }
        else
        {
            this.setState(()=>({
                error: ""
            }))
            this.props.onSubmit({
                description:this.state.description,
                amount:parseFloat(this.state.amount,10)*100,
                createdAt:this.state.createdAt.valueOf(),
                note:this.state.note
            })
        }
    }

    render() {
        return (
            <div> 
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input type="text"
                        placeholder="Description"
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                        autoFocus
                    />
                    <input type='text'
                        placeholder='Amount'
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                    date={this.state.createdAt }
                    onDateChange={this.onDateChange}
                    focused={this.state.focused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={()=>false}
                    />
                    <textarea 
                    value={this.state.note}
                    onChange={this.onNoteChange}
                        placeholder="Add a note for your expense (optional)"
                    >
                    </textarea>
                    <button>Save</button>
                </form>
            </div>
            )
    }
}