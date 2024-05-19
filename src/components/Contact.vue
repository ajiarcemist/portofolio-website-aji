<script setup></script>

<template>
  <div class="max-w-[1200px] mx-auto bg-black sm:py-20 p-5 sm:mt-[-25px]">
    <div class="text-center">
      <h2 class="text-4xl font-bold leading-tight primary-color">Contact Me</h2>
    </div>
    <div class="max-w-[800px] mx-auto">
      <div class="mt-6 bg-[#161616] rounded-xl">
        <div class="p-10">
          <form action="https://getform.io/f/pboxylxa" method="POST">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-4">
              <div class="col-span-1">
                <div class="mt-2.5">
                  <input
                    type="text"
                    name="name"
                    placeholder="Nama Kamu"
                    class="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600"
                  />
                </div>
              </div>
              <div class="col-span-1">
                <div class="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Kamu"
                    class="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600"
                  />
                </div>
              </div>
              <div class="col-span-1 md:col-span-2">
                <div class="mt-2.5">
                  <textarea
                    name="message"
                    placeholder="Pesan Kamu"
                    class="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600"
                    rows="4"
                  ></textarea>
                </div>
              </div>
              <div class="col-span-1 md:col-span-2">
                <button
                  type="submit"
                  class="text-xl w-full p-4 mt-2 font-semibold text-white bg-primary-color rounded-md"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
