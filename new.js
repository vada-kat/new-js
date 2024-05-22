//write a function that is used to get data from a person and calculate the area of a cuboid
def calculate_cuboid_area():
    # Get input from the user
    length = float(input("Enter the length of the cuboid: "))
    width = float(input("Enter the width of the cuboid: "))
    height = float(input("Enter the height of the cuboid: "))

    # Calculate the area of the cuboid
    area = 2 * (length * width + length * height + width * height)

    return area

# 
cuboid_area = calculate_cuboid_area()
print("The total surface area of the cuboid is:", cuboid_area)
