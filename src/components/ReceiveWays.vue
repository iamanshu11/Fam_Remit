<template>
    <section class="w-full py-16 bg-white">
        <div class="container mx-auto ">
            <div class="text-center">
                <h2 class="text-3xl md:text-4xl font-bold mb-10 text-center w-full">
                    Simple Ways to <span class="text-blue-500">Receive Money</span>
                </h2>
            </div>

            <div class="flex flex-col md:flex-row items-center justify-between gap-12 px-4 mt-12">
                <!-- Left: Phone Image -->
                <div class="flex-1 flex justify-center items-center md:justify-start md:items-center mb-8 md:mb-0">
                    <img src="/src/assets/img/simple-way.png" alt="Send Money App"
                        class="max-w-xs md:max-w-sm w-full drop-shadow-2xl" />
                </div>
                <!-- Right: Headline and Grid -->
                <div class="flex-1 flex flex-col items-center w-full">

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-xl">
                        <div
                            class="flex justify-center items-center transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                            <div
                                class="relative  rounded-[15px] shadow-2xl overflow-hidden  w-96 cursor-pointer transition-all duration-300 ease-in-out group">
                                <!-- Blue Background Transition -->
                                <div
                                    class="absolute top-0 left-0 w-full h-full bg-[#5456EE] rounded-[15px] group-hover:h-full transition-all duration-300 ease-in-out z-0">
                                </div>
                                <!-- Main Card Content -->
                                <div class="pb-[50px]  relative ">
                                    <!-- Secondary Content Box -->
                                    <div
                                        class="mb-10 py-8 px-6 text-center rounded-t-[15px] rounded-b-[30px] shadow-md bg-white transition-colors duration-300 ease-in-out text-gray-900 group-hover:text-white">

                                        <img src="/src/assets/img/simple-way/airtime.png"
                                            class="w-16 h-16 object-contain mx-auto">
                                    </div>
                                </div>
                                <div class="absolute bottom-2 left-0 w-full flex justify-center">
                                    <p class="font-custom text-center text-xl font-semibold text-white">
                                        Airtime Top-Up</p>
                                </div>
                            </div>
                        </div>
                        <div
                            class="flex justify-center items-center transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                            <div
                                class="relative  rounded-[15px] shadow-2xl overflow-hidden  w-96 cursor-pointer transition-all duration-300 ease-in-out group">
                                <!-- Blue Background Transition -->
                                <div
                                    class="absolute top-0 left-0 w-full h-full bg-[#5456EE] rounded-[15px] group-hover:h-full transition-all duration-300 ease-in-out z-0">
                                </div>
                                <!-- Main Card Content -->
                                <div class="pb-[50px]  relative ">
                                    <!-- Secondary Content Box -->
                                    <div
                                        class="mb-10 py-8 px-6 text-center rounded-t-[15px] rounded-b-[30px] shadow-md bg-white transition-colors duration-300 ease-in-out text-gray-900 group-hover:text-white">

                                        <img src="/src/assets/img/simple-way/mobile.png"
                                            class="w-16 h-16 object-contain mx-auto">
                                    </div>
                                </div>
                                <div class="absolute bottom-2 left-0 w-full flex justify-center">
                                    <p class="font-custom text-center text-xl font-semibold text-white">
                                        Mobile Money</p>
                                </div>
                            </div>
                        </div>
                        <div
                            class="flex justify-center items-center transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                            <div
                                class="relative  rounded-[15px] shadow-2xl overflow-hidden  w-96 cursor-pointer transition-all duration-300 ease-in-out group">
                                <!-- Blue Background Transition -->
                                <div
                                    class="absolute top-0 left-0 w-full h-full bg-[#5456EE] rounded-[15px] group-hover:h-full transition-all duration-300 ease-in-out z-0">
                                </div>
                                <!-- Main Card Content -->
                                <div class="pb-[50px]  relative ">
                                    <!-- Secondary Content Box -->
                                    <div
                                        class="mb-10 py-8 px-6 text-center rounded-t-[15px] rounded-b-[30px] shadow-md bg-white transition-colors duration-300 ease-in-out text-gray-900 group-hover:text-white">

                                        <img src="/src/assets/img/simple-way/bank.png"
                                            class="w-16 h-16 object-contain mx-auto">
                                    </div>
                                </div>
                                <div class="absolute bottom-2 left-0 w-full flex justify-center">
                                    <p class="font-custom text-center text-xl font-semibold text-white">
                                        Bank Deposit</p>
                                </div>
                            </div>
                        </div>
                        <div
                            class="flex justify-center items-center transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                            <div
                                class="relative  rounded-[15px] shadow-2xl overflow-hidden  w-96 cursor-pointer transition-all duration-300 ease-in-out group">
                                <!-- Blue Background Transition -->
                                <div
                                    class="absolute top-0 left-0 w-full h-full bg-[#5456EE] rounded-[15px] group-hover:h-full transition-all duration-300 ease-in-out z-0">
                                </div>
                                <!-- Main Card Content -->
                                <div class="pb-[50px]  relative ">
                                    <!-- Secondary Content Box -->
                                    <div
                                        class="mb-10 py-8 px-6 text-center rounded-t-[15px] rounded-b-[30px] shadow-md bg-white transition-colors duration-300 ease-in-out text-gray-900 group-hover:text-white">

                                        <img src="/src/assets/img/simple-way/cash.png"
                                            class="w-16 h-16 object-contain mx-auto">
                                    </div>
                                </div>
                                <div class="absolute bottom-2 left-0 w-full flex justify-center">
                                    <p class="font-custom text-center text-xl font-semibold text-white">
                                        Cash Pickup</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>
// No script needed
</script>