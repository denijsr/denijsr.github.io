import os
import shutil

# Function to create a new folder and copy images to it
def create_and_copy_images(image_files, output_folder):
    os.makedirs(output_folder, exist_ok=True)  # Create the output folder if it doesn't exist
    for image_file in image_files:
        shutil.copy(image_file, output_folder)  # Copy each image to the output folder

# Function to iterate over the folders and select images by index
def select_images_from_folders(input_folders):
    num_images = len(os.listdir(input_folders[0]))  # Get the number of images in each folder
    for i in range(num_images):
        selected_images = [os.path.join(folder, sorted(os.listdir(folder))[i]) for folder in input_folders]
        create_and_copy_images(selected_images, f"Output_Image_{i+1}")

# Main function
def main():
    input_folders = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33"]
    select_images_from_folders(input_folders)

if __name__ == "__main__":
    main()
