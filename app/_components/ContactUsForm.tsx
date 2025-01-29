"use client";
import React from "react";
import Form from "./Form";

type ValuesTypes = Record<string, string>;

export default function ContactUsForm() {
  function handleSubmit(data: ValuesTypes) {
    console.log(data);
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <div className="space-y-1">
          <Form.Label id="userName">What’s your name?</Form.Label>
          <Form.Input id="userName" />
        </div>
        <div className="space-y-1">
          <Form.Label id="email">What’s your email address?</Form.Label>
          <Form.Input id="email" />
        </div>
        <div className="space-y-1">
          <Form.Label id="phoneNumber">What’s your phone number?</Form.Label>
          <Form.Input id="phoneNumber" />
        </div>
        <div className="space-y-1">
          <Form.Label id="comment">What are you looking for?</Form.Label>
          <Form.Input id="comment" />
        </div>
        <div className="space-y-1">
          <Form.Label id="helpComment">How can we help you?</Form.Label>
          <Form.TextArea id="helpComment" />
        </div>
        <button className="relative top-1 flex h-[56px] w-full items-center justify-center rounded-[80px] bg-black text-xs text-white">
          Send request
        </button>
      </Form>
    </>
  );
}
