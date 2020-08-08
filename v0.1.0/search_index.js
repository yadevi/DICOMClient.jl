var documenterSearchIndex = {"docs":
[{"location":"api/","page":"API","title":"API","text":"CurrentModule = DICOMClient","category":"page"},{"location":"api/#API","page":"API","title":"API","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"Modules = [DICOMClient]","category":"page"},{"location":"api/#DICOMClient.BaseURL-Tuple{AbstractString}","page":"API","title":"DICOMClient.BaseURL","text":"Construct a BaseURL object given the base URL.\n\n\n\n\n\n","category":"method"},{"location":"api/#DICOMClient.package_version-Tuple{}","page":"API","title":"DICOMClient.package_version","text":"The version of the DICOMClient.jl Julia package.\n\n\n\n\n\n","category":"method"},{"location":"examples/","page":"Examples","title":"Examples","text":"CurrentModule = DICOMClient","category":"page"},{"location":"examples/#Examples","page":"Examples","title":"Examples","text":"","category":"section"},{"location":"examples/","page":"Examples","title":"Examples","text":"using DICOMClient\nusing FileIO, ImageInTerminal, ImageMagick, Images\n\nbase_url = DICOMClient.BaseURL(\"https://dicomcloud.azurewebsites.net/api\")\nauth = DICOMClient.AnonymousAuth()\nclient = DICOMClient.Client(base_url, auth)\n\nimages = DICOMClient.get_frame_images(\n    Val(:jpeg),\n    client;\n    study = \"1.2.156.112536.1.2116.222245005117096205.13585270080.1\",\n    series = \"1.2.156.112536.1.2116.222245005117096205.13585270080.2\",\n    instance = \"1.2.156.112536.1.2116.222245005117096205.13585271850.5\",\n    frames = 1:1,\n)\n\nsize(images)\nimages[1]\nimages[2]\nFileIO.save(\"image_1.jpeg\", images[1])\nFileIO.save(\"image_2.jpeg\", images[2])","category":"page"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = DICOMClient","category":"page"},{"location":"#DICOMClient","page":"Home","title":"DICOMClient","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"DICOMClient.jl provides a Julia client for connecting to servers that support the Digital Imaging and Communications in Medicine (DICOM) standard by using the DICOMweb set of RESTful services.","category":"page"},{"location":"","page":"Home","title":"Home","text":"You may also be interested in the DICOM.jl package.","category":"page"}]
}
