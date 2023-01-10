import addFunction from '@/utils/add'

async function main() {
    // const addFunction = (await import('@/utils/add')).default

    console.log('2 + 3 =', addFunction(2, 3))
}


main()
.then(() => console.log('Done'))
.catch((err) => {
    console.error(err)
    process.exit(1)
})

