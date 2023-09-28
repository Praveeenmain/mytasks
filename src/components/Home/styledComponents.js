import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;

  align-items: flex-start;
  background-color: #131213;
  height: 100vh;
  background-size: cover;
`

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 125px;
  padding-left: 125px;
  padding-top: 75px;
  background-color: #1a171d;
  height: 100vh;
  width: fixed;
  margin-right: 55px;
`

export const Heading = styled.h1`
  color: #f3aa4e;
  font-size: 35px;
  font-weight: bold;
`

export const FormContainer = styled.form`
  background-color: #1a171d;
  margin-top: 130px;
  display: flex;
  flex-direction: column;
`
export const Label = styled.label`
  color: #ffffff;
  font-size: 30px;
  margin-bottom: 10px;
  margin-top: 10px;
`

export const Input = styled.input`
  width: 350px;
  height: 45px;
`

export const Select = styled.select`
  width: 350px;
  height: 45px;
`

export const FormButton = styled.button`
  background-color: #f3aa4e;
  color: #ffffff;
  margin-top: 25px;
  height: 35px;
`
export const AddTaskContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const AddHeading = styled.h1`
  color: #ffffff;
`

export const ButtonContainer = styled.ul`
  display: flex;
`

export const TaskButton = styled.button`
  background-color: ${props => (props.isActive ? '#f3aa4e' : 'transparent')};
  border: 1px solid #f1f5f9;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 800;
  color: #f1f5f9;
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  margin-right: 9px;
`
export const TagList = styled.li`
  display: flex;
  margin: 7px;
`

export const Taskcard = styled.li`
  background-color: #323f4b;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px;
  margin-bottom: 15px;
  border-radius: 9px;
`
export const Taskheading = styled.p`
  color: #ffffff;
  font-size: 30px;
  font-weight: 600;
`
export const Tasktag = styled.p`
  background-color: #f3aa4e;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 800;
  color: #323f4b;
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
`
