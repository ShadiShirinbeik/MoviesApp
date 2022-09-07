<template>
    <div class="details">
        <!-- movie info -->
        <div class="flex">
            <img class="details_cover" src="/images/cover.jpg" alt="movie image">
            <div class="details_info">
                <div v-for="i in 6" :key="i">
                    <span>test:</span>
                    <span>$1700,000,000</span>
                </div>
            </div>
        </div>
        <!-- description -->
        <div class="details_desc">
            <span>In publishing and graphic design, Lorem ipsum is a In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</span>
        </div>
        <!-- credit -->
        <div class="details_credit credit flex flex-col">
            <span class="credit_title">Credits:</span>
            <span class="credit_info">Test, Test, Test, Test</span>
        </div>
    </div>
</template>