import React from 'react'
import { Controller } from 'react-hook-form';
import Select from 'react-select'

const FormComponent = ({ form, onSubmit, formFields }) => {
  const { register, handleSubmit, formState: { errors }, control } = form;
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="section-container">
      <h2 className="self-center text-3xl text-center text-indigo-950">Item Details</h2>
      {formFields.map(({name, placeholder, type, options, label }) => (
        <>
          <label htmlFor={name} className="mt-9 text-xs font-semibold tracking-normal leading-4 uppercase">{label}</label>
          {type === 'textarea' ? (
            <textarea {...register(name)} placeholder={placeholder} className={`justify-center items-start px-4 py-4 mt-3 text-indigo-950 bg-white rounded-sm border border-solid border-zinc-200 max-md:pr-5 w-full`}></textarea>
          ) : type === 'select' ? (
            <Controller
              name={name}
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={options}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                  placeholder={placeholder}
                />
              )}
            />
          ) : (
            <input {...register(name)} placeholder={placeholder} className={`justify-center items-start px-4 py-4 mt-3 text-indigo-950 bg-white rounded-sm border border-solid border-zinc-200 max-md:pr-5 w-full`}></input>
          )}
          {errors[name] && <p className="text-red-600">{errors[name].message}</p>}
        </>
      ))}
      
      <div className="section-container">
        <div className="section-container">
          This channel is for iB studio trainees<br />team.
        </div>
        <button type="submit" className="button">CREATE</button>
      </div>
    </form>
  )
}

export default FormComponent;