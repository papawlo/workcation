module.exports = {
  theme: {
   
    extend: {

      spacing:{
        '72' : '18rem',
        '80' : '20rem'
      },
      padding:{
        '5/6': '83.333333%'
      },
    },
    customForms: theme => ({      
      default: {
        'input, textarea, multiselect, select': {
          borderRadius: theme('borderRadius.lg'),
          backgroundColor: theme('colors.gray.700'),
          borderColor:'transparent'
        },
        'radio, checkbox':{
          backgroundColor: theme('colors.gray.900'),
          borderColor:'transparent',
          width: '1.5em',
          height: '1.5em',
          '&:checked': {
            backgroundColor: theme('colors.gray.500'),
          },
          '&:focus': {
            backgroundColor: theme('colors.gray.700'),
          }
        },
        // 'input, textarea, multiselect': {
        //   backgroundColor: theme('colors.gray.900'),
        // },
        input: {
          // borderRadius: theme('borderRadius.lg'),
          backgroundColor: theme('colors.gray.200'),
          '&:focus': {
            backgroundColor: theme('colors.white'),
          }
        },
        select: {          
          // borderRadius: theme('borderRadius.lg'),
          // boxShadow: theme('boxShadow.default'),
          color: theme('colors.white'),
          lineHeight: theme('lineHeight.snug'),
          '&:focus': {            
            boxShadow: theme('boxShadow.outline.none'),
            borderColor: 'transparent',
            backgroundColor: theme('colors.gray.400'),
            color: theme('colors.gray.900'),
            fontWeight: theme('fontWeight.semibold')
          },
        },
        // checkbox: {
        //   '&:checked': {
        //     backgroundColor: theme('colors.indigo.500'),
        //   }
        // },
      },
    })
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms')
  ],
}
