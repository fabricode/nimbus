import theme from './theme'

export default formDefaults = {
  form:{
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: '100%',
    padding: 10
  },
  formElementGroup: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  formElementGroupLabel: {
    color: theme.colors.gray
  },
  formElement: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    margin: 10
  },
  formLabel: {
    marginBottom: 5,

  },
}
