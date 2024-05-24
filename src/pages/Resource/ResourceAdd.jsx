import React, { useState } from 'react'
import {useForm } from 'react-hook-form';
import { ReactComponent as LeftArrowIcon } from '../../assets/icons/leftArrow.svg'
import { zodResolver } from '@hookform/resolvers/zod';
import { resourceSchema } from '../../utils/formSchema';
import FormComponent from '../../components/FormComponent';
import '../../styles/createResource.css'
import { addResourceForm } from '../../constants/form';
import { addResource } from '../../helper/apiCalls';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ResourceAdd = () => {
  const navigate = useNavigate()
  const [formFields, setFormFields] = useState(addResourceForm);
  const form = useForm({
    resolver: zodResolver(resourceSchema),
  })
  const handleSubmit = async (values) => {
    try {
      await addResource({ ...values, tag: values.tag.value });
      toast.success('Resource added Successfully!');
      navigate('/');
    } catch (err) {
      console.error(err);
      toast.error('Failed to add resource!');
    }
  }
  return (
    <div className="section">
      <section className="item-container w-half">
        <div className="flex gap-1 self-start text-xs leading-4 whitespace-nowrap cursor-pointer">
          <LeftArrowIcon />
          <div className="my-auto" onClick={() => navigate('/')}>Users</div>
        </div>
        <FormComponent form={form} onSubmit={handleSubmit} formFields={formFields} />
      </section>
      <section className="ml-5 w-half">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b733e9abca5e51e165e3a9034d7b2528a192b3e3dd89d44570fea89ef15ed74?apiKey=9a2fec4ca6994ce297432330db493ccf&" alt="Main visual content" className="grow w-full aspect-[0.68]" />
      </section>
    </div>
  )
}

export default ResourceAdd