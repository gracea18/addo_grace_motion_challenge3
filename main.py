while True :
    if input.acceleration(Dimension.X) > 0:
        print("The CPX is moving fast(X)")
        light.set_all(light.rgb(0,255,255))

    elif input.acceleration(Dimension.X)< 0:
        print("The CPX is moving slow(X)")
        light.set_all(light.rgb(255,0,255))

    elif input.acceleration(Dimension.Y) > 0:
        print("The CPX is moving fast(Y)")
        light.set_all(light.rgb(255,255,0))
    
    elif input.acceleration(Dimension.Y) < 0:
        print("The CPX is moving slow(Y)")
        light.set_all(light.rgb(139, 69, 19))

    elif input.acceleration(Dimension.Z) > 0:
        print("The CPX is moving fast (Z)")
        light.set_all(light.rgb(0,0,128))
    
    elif input.acceleration(Dimension.Z) < 0:
        print("The CPX is moving slow (Z)")
        light.set_all(light.rgb(105, 105, 105))
    else:
        light.clear()
