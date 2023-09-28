import {Component} from 'react'
import {v4} from 'uuid'
import {
  HomeContainer,
  TaskContainer,
  Heading,
  FormContainer,
  Label,
  Input,
  Select,
  FormButton,
  AddTaskContainer,
  AddHeading,
  ButtonContainer,
  Taskcard,
  TaskButton,
  Taskheading,
  Tasktag,
} from './styledComponents'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class Home extends Component {
  state = {
    inputText: '',
    inputTag: tagsList[0].optionId,
    taskList: [],
    activeTag: 'INITIAL',
  }

  onChangeInput = event => {
    this.setState({
      inputText: event.target.value,
    })
  }

  onChangeTag = event => {
    this.setState({
      inputTag: event.target.value,
    })
  }

  formSubmit = event => {
    event.preventDefault()
    const {inputText, inputTag} = this.state
    const newTask = {
      id: v4(),
      task: inputText,
      tag: inputTag,
    }

    if (inputText.length !== 0) {
      this.setState(prevState => ({
        taskList: [...prevState.taskList, newTask],
        inputText: '',
        inputTag: tagsList[0].optionId, // Set it back to the default tag
      }))
    }
  }

  renderTaskCard = () => {
    const {taskList, activeTag} = this.state
    const filterTaskList =
      activeTag === 'INITIAL'
        ? taskList
        : taskList.filter(each => each.tag === activeTag)
    return (
      <>
        {filterTaskList.map(each => (
          <Taskcard key={each.id}>
            <Taskheading>{each.task}</Taskheading>
            <Tasktag>{each.tag}</Tasktag>
          </Taskcard>
        ))}
      </>
    )
  }

  onClickActiveTag = event => {
    this.setState(prevState => ({
      activeTag:
        prevState.activeTag === event.target.value
          ? 'INITIAL'
          : event.target.value,
    }))
  }

  renderTaskContainer = () => {
    const {inputText, inputTag} = this.state
    return (
      <TaskContainer>
        <Heading> Create a task!</Heading>
        <FormContainer onSubmit={this.formSubmit}>
          <Label htmlFor="inputText"> Tasks</Label>
          <Input
            id="inputText"
            value={inputText}
            onChange={this.onChangeInput}
            type="text"
            placeholder="Enter the task here"
          />
          <Label htmlFor="selectTag">Tags</Label>
          <Select id="selectTag" value={inputTag} onChange={this.onChangeTag}>
            {tagsList.map(eachoption => (
              <option key={eachoption.optionId} value={eachoption.optionId}>
                {eachoption.displayText}
              </option>
            ))}
          </Select>
          <FormButton type="submit">Add Task</FormButton>
        </FormContainer>
      </TaskContainer>
    )
  }

  renderAddtaskView = () => {
    const {activeTag, taskList} = this.state
    console.log(taskList)
    return (
      <AddTaskContainer>
        <AddHeading>Tags</AddHeading>
        <ButtonContainer>
          {tagsList.map(eachbutton => {
            const isActive = activeTag === eachbutton.optionId
            return (
              <li  key={eachbutton.optionId}>
              <TaskButton
                onClick={this.onClickActiveTag}
                type="button"
                value={eachbutton.optionId}
             
                isActive={isActive}
              >
                {eachbutton.displayText}{' '}
              </TaskButton>
              </li>
            )
          })}
        </ButtonContainer>

        <AddHeading>Tasks</AddHeading>
        <ul>
          {taskList.length === 0 ? (
            <Taskheading>No Tasks Added Yet</Taskheading>
          ) : (
            this.renderTaskCard()
          )}
        </ul>
      </AddTaskContainer>
    )
  }

  render() {
    return (
      <HomeContainer>
        {this.renderTaskContainer()}
        {this.renderAddtaskView()}
      </HomeContainer>
    )
  }
}

export default Home
