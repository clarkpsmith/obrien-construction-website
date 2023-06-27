"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

const ContactForm = ({ profile }: { profile: any }) => {
  const [sending, setSending] = useState<boolean>(false)
  const [sent, setSent] = useState<boolean>(false)
  const [mailError, setMailError] = useState<any>(false)

  interface FormValues {
    name: string
    email: string
    subject: string
    message: string
  }

  const initialValues: FormValues = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required'),
  })
  console.log('PROFILE', profile.email)

  const handleSubmit = async (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    setSending(true)
    const data = {
      from: values.email,
      to: profile.email,
      subject: values.subject,
      text: `${values.message}\n\nThanks,\n ${values.name}`,
    }

    try {
      const res = await axios.post('/api/sendEmail', { data })

      console.log({ res })
      setSending(false)
      setSent(true)
    } catch (error) {
      setMailError(error)
      console.log({ error })
    }
    resetForm()
  }

  return (
    <section id="contact">
      <div className="p-4 text-white bg-black">
        <div className="flex">
          <div className="text-[24px]  sm:text-[32px] w-full flex justify-center items-center text-center">
            <span className="py-2">{`Contact ${profile.name}`}</span>
          </div>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isValid }) => (
            <Form
              onFocus={() => {
                setSent(false)
                setMailError(false)
              }}
              className="max-w-md mx-auto"
            >
              <div className="text-[12px] sm:text-[16px] mb-4">
                <label
                  htmlFor="name"
                  className="block mb-2 text-lg font-medium"
                >
                  Name
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <div className="relative">
                  <div className="absolute">
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-[10px] mt-[2px]"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block mb-2 text-lg font-medium"
                >
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  name="email"
                />
                <div className="relative">
                  <div className="absolute">
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-[10px] mt-[2px]"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block mb-2 text-lg font-medium"
                >
                  Subject
                </label>
                <Field
                  type="subject"
                  id="subject"
                  className="w-full px-4 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  name="subject"
                />
                <div className="relative">
                  <div className="absolute">
                    <ErrorMessage
                      name="subject"
                      component="div"
                      className="text-red-500 text-[10px] mt-[2px]"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block mb-2 text-lg font-medium "
                >
                  Message
                </label>
                <Field
                  id="message"
                  as="textarea"
                  name="message"
                  className="w-full px-4 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  rows={4}
                />
                <div className="relative">
                  <div className="absolute">
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-red-500 text-[10px]"
                    />
                  </div>
                </div>
              </div>
              {sent ? (
                <button
                  type="submit"
                  disabled={true}
                  className="w-full py-2 px-4 bg-gray-600 text-white font-semibold rounded-md mt-1"
                >
                  Sent
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!isValid}
                  className={`w-full py-2 px-4 bg-gray-600 text-white font-semibold rounded-md mt-1 ${
                    !isValid
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:bg-gray-700'
                  }`}
                >
                  {sending ? 'Sending' : 'Send Message'}
                </button>
              )}
              <div className="relative">
                <div className="absolute">
                  <div className="text-red-500 mt-2 text-[10px]">
                    {mailError &&
                      `Sorry, there was an error sending your message: ${mailError.message}`}
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  )
}

export default ContactForm;