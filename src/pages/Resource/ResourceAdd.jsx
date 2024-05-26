import React from 'react'
import {useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'; 

import { ReactComponent as LeftArrowIcon } from '../../assets/icons/leftArrow.svg'
import { resourceSchema } from '../../utils/formSchema';
import FormComponent from '../../components/FormComponent';
import '../../styles/createResource.css'
import { addResourceForm } from '../../constants/form';
import { addResource } from '../../helper/apiCalls';
import addResourceImage from '../../assets/images/side.png'
const ResourceAdd = () => {
  const navigate = useNavigate();
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
    <div className="section add-resource">
      <div className="left-half">
      <div className="back">
          <LeftArrowIcon />
          <div className="back-btn" onClick={() => navigate('/')}>Users</div>
        </div>
        <div className="form-container">
          <FormComponent form={form} onSubmit={handleSubmit} formFields={addResourceForm} />
        </div>
      </div>
      <section className="image-container">
        <img loading="lazy" src={addResourceImage} alt="Main visual content" className="main-image" />
      </section>
    </div>
  )
}

export default ResourceAdd