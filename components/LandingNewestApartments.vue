<template>
  <section class="text-gray-700 body-font border-t border-gray-200">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          Newest Apartments
        </h1>
        <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
          View All Apartments
        </h2>
      </div>
      <div class="flex flex-wrap -m-4">
        <div class="p-4 md:w-1/3">
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full" src="https://i.picsum.photos/id/1029/4887/2759.jpg?hmac=uMSExsgG8_PWwP9he9Y0LQ4bFDLlij7voa9lU9KMXDE" alt="Sunset in the mountains">
            <div class="px-6 py-4">
              <div>
                <div class="relative">
                  <p class="absolute left-0">
                    $4300
                  </p>
                  <p class="absolute right-0">
                    1 Month
                  </p>
                </div>
                <br>
                <div class="text-lg mb-2">
                  The Coldest Sunset
                </div>
                <div class="grid grid-cols-3 gap-4">
                  <div>2 Bed</div>
                  <div>1 Bath</div>
                  <div>A C</div>
                </div>
                <p class="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'LandingNewestApartments'
}
</script>
