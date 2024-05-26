import React from 'react'
import { Controller } from 'react-hook-form';
import Select from 'react-select'

const FormComponent = ({ form, onSubmit, formFields }) => {
  const { register, handleSubmit, formState: { errors }, control } = form;
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='form'>
      <h2 className="form-header">Item Details</h2>
      {formFields.map(({ name, placeholder, type, options, label }) => (
        <>
          <label htmlFor={name} className="title-container">{label}</label>
          {type === 'textarea' ? (
            <textarea {...register(name)} placeholder={placeholder} className="textarea-container"></textarea>
          ) : type === 'select' ? (
            <Controller
              name={name}
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={options}
                  className="select-input"
                  placeholder={placeholder}
                />
              )}
            />
          ) : (
            <input {...register(name)} placeholder={placeholder} className="input-container" />
          )}
          {errors[name] && <p className="error-message">{errors[name].message}</p>}
        </>
      ))}
      <button type="submit" className="button primary">CREATE</button>
    </form>
  )
}

export default FormComponent;