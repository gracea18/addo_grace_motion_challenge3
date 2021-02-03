while (true) {
    if (input.acceleration(Dimension.X) > 0) {
        console.log("The CPX is moving fast(X)")
        light.setAll(light.rgb(0, 255, 255))
    } else if (input.acceleration(Dimension.X) < 0) {
        console.log("The CPX is moving slow(X)")
        light.setAll(light.rgb(255, 0, 255))
    } else if (input.acceleration(Dimension.Y) > 0) {
        console.log("The CPX is moving fast(Y)")
        light.setAll(light.rgb(255, 255, 0))
    } else if (input.acceleration(Dimension.Y) < 0) {
        console.log("The CPX is moving slow(Y)")
        light.setAll(light.rgb(139, 69, 19))
    } else if (input.acceleration(Dimension.Z) > 0) {
        console.log("The CPX is moving fast (Z)")
        light.setAll(light.rgb(0, 0, 128))
    } else if (input.acceleration(Dimension.Z) < 0) {
        console.log("The CPX is moving slow (Z)")
        light.setAll(light.rgb(105, 105, 105))
    } else {
        light.clear()
    }
    
}
